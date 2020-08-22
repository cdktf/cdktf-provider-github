// https://www.terraform.io/docs/providers/github/r/data_github_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubRepositoryConfig extends TerraformMetaArguments {
  readonly fullName?: string;
  readonly name?: string;
}

// Resource

export class DataGithubRepository extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // allow_merge_commit - computed: true, optional: false, required: true
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit');
  }

  // allow_rebase_merge - computed: true, optional: false, required: true
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge');
  }

  // allow_squash_merge - computed: true, optional: false, required: true
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }

  // archived - computed: true, optional: false, required: true
  public get archived() {
    return this.getBooleanAttribute('archived');
  }

  // default_branch - computed: true, optional: false, required: true
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string;
  public get fullName() {
    return this._fullName;
  }
  public set fullName(value: string | undefined) {
    this._fullName = value;
  }

  // git_clone_url - computed: true, optional: false, required: true
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // has_downloads - computed: true, optional: false, required: true
  public get hasDownloads() {
    return this.getBooleanAttribute('has_downloads');
  }

  // has_issues - computed: true, optional: false, required: true
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }

  // has_projects - computed: true, optional: false, required: true
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }

  // has_wiki - computed: true, optional: false, required: true
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
  }

  // homepage_url - computed: true, optional: false, required: true
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }

  // html_url - computed: true, optional: false, required: true
  public get htmlUrl() {
    return this.getStringAttribute('html_url');
  }

  // http_clone_url - computed: true, optional: false, required: true
  public get httpCloneUrl() {
    return this.getStringAttribute('http_clone_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // node_id - computed: true, optional: false, required: true
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // private - computed: true, optional: false, required: true
  public get private() {
    return this.getBooleanAttribute('private');
  }

  // ssh_clone_url - computed: true, optional: false, required: true
  public get sshCloneUrl() {
    return this.getStringAttribute('ssh_clone_url');
  }

  // svn_url - computed: true, optional: false, required: true
  public get svnUrl() {
    return this.getStringAttribute('svn_url');
  }

  // topics - computed: true, optional: false, required: true
  public get topics() {
    return this.getListAttribute('topics');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_name: this._fullName,
      name: this._name,
    };
  }
}
