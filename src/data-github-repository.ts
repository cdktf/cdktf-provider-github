// https://www.terraform.io/docs/providers/github/d/repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGithubRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#description DataGithubRepository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#full_name DataGithubRepository#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#homepage_url DataGithubRepository#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/repository.html#name DataGithubRepository#name}
  */
  readonly name?: string;
}
export class DataGithubRepositoryBranches extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected') as any;
  }
}
export class DataGithubRepositoryPagesSource extends cdktf.ComplexComputedList {

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataGithubRepositoryPages extends cdktf.ComplexComputedList {

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // custom_404 - computed: true, optional: false, required: false
  public get custom404() {
    return this.getBooleanAttribute('custom_404') as any;
  }

  // html_url - computed: true, optional: false, required: false
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('source') as any;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/d/repository.html github_repository}
*/
export class DataGithubRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "github_repository";

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
    this._description = config.description;
    this._fullName = config.fullName;
    this._homepageUrl = config.homepageUrl;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_auto_merge - computed: true, optional: false, required: false
  public get allowAutoMerge() {
    return this.getBooleanAttribute('allow_auto_merge') as any;
  }

  // allow_merge_commit - computed: true, optional: false, required: false
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit') as any;
  }

  // allow_rebase_merge - computed: true, optional: false, required: false
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge') as any;
  }

  // allow_squash_merge - computed: true, optional: false, required: false
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge') as any;
  }

  // archived - computed: true, optional: false, required: false
  public get archived() {
    return this.getBooleanAttribute('archived') as any;
  }

  // branches - computed: true, optional: false, required: false
  public branches(index: string) {
    return new DataGithubRepositoryBranches(this, 'branches', index);
  }

  // default_branch - computed: true, optional: false, required: false
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string | undefined; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string | undefined) {
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
    return this.getBooleanAttribute('has_downloads') as any;
  }

  // has_issues - computed: true, optional: false, required: false
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues') as any;
  }

  // has_projects - computed: true, optional: false, required: false
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects') as any;
  }

  // has_wiki - computed: true, optional: false, required: false
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki') as any;
  }

  // homepage_url - computed: false, optional: true, required: false
  private _homepageUrl?: string | undefined; 
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }
  public set homepageUrl(value: string | undefined) {
    this._homepageUrl = value;
  }
  public resetHomepageUrl() {
    this._homepageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homepageUrlInput() {
    return this._homepageUrl
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

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
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

  // pages - computed: true, optional: false, required: false
  public pages(index: string) {
    return new DataGithubRepositoryPages(this, 'pages', index);
  }

  // private - computed: true, optional: false, required: false
  public get private() {
    return this.getBooleanAttribute('private') as any;
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getNumberAttribute('repo_id');
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

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      full_name: cdktf.stringToTerraform(this._fullName),
      homepage_url: cdktf.stringToTerraform(this._homepageUrl),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
