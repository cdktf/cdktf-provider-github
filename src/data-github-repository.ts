// https://www.terraform.io/docs/providers/github/d/repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#full_name DataGithubRepository#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#name DataGithubRepository#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository.html github_repository}
*/
export class DataGithubRepository extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/d/repository.html github_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGithubRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGithubRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'github_repository',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fullName = config.fullName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_merge_commit - computed: true, optional: false, required: false
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit');
  }

  // allow_rebase_merge - computed: true, optional: false, required: false
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge');
  }

  // allow_squash_merge - computed: true, optional: false, required: false
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string;
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string ) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName
  }

  // git_clone_url - computed: true, optional: false, required: false
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // has_downloads - computed: true, optional: false, required: false
  public get hasDownloads() {
    return this.getBooleanAttribute('has_downloads');
  }

  // has_issues - computed: true, optional: false, required: false
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }

  // has_projects - computed: true, optional: false, required: false
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }

  // has_wiki - computed: true, optional: false, required: false
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
  }

  // homepage_url - computed: true, optional: false, required: false
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // http_clone_url - computed: true, optional: false, required: false
  public get httpCloneUrl() {
    return this.getStringAttribute('http_clone_url');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // ssh_clone_url - computed: true, optional: false, required: false
  public get sshCloneUrl() {
    return this.getStringAttribute('ssh_clone_url');
  }

  // svn_url - computed: true, optional: false, required: false
  public get svnUrl() {
    return this.getStringAttribute('svn_url');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.getListAttribute('topics');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_name: cdktf.stringToTerraform(this._fullName),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
