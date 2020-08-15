// https://www.terraform.io/docs/providers/github/r/repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface RepositoryConfig extends TerraformMetaArguments {
  readonly allowMergeCommit?: boolean;
  readonly allowRebaseMerge?: boolean;
  readonly allowSquashMerge?: boolean;
  readonly archived?: boolean;
  readonly autoInit?: boolean;
  /** Can only be set after initial repository creation, and only if the target branch exists */
  readonly defaultBranch?: string;
  readonly deleteBranchOnMerge?: boolean;
  readonly description?: string;
  readonly gitignoreTemplate?: string;
  readonly hasDownloads?: boolean;
  readonly hasIssues?: boolean;
  readonly hasProjects?: boolean;
  readonly hasWiki?: boolean;
  readonly homepageUrl?: string;
  readonly isTemplate?: boolean;
  readonly licenseTemplate?: string;
  readonly name: string;
  readonly private?: boolean;
  readonly topics?: string[];
  /** template block */
  readonly template?: RepositoryTemplate[];
}
export interface RepositoryTemplate {
  readonly owner: string;
  readonly repository: string;
}

// Resource

export class Repository extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
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
    this._allowMergeCommit = config.allowMergeCommit;
    this._allowRebaseMerge = config.allowRebaseMerge;
    this._allowSquashMerge = config.allowSquashMerge;
    this._archived = config.archived;
    this._autoInit = config.autoInit;
    this._defaultBranch = config.defaultBranch;
    this._deleteBranchOnMerge = config.deleteBranchOnMerge;
    this._description = config.description;
    this._gitignoreTemplate = config.gitignoreTemplate;
    this._hasDownloads = config.hasDownloads;
    this._hasIssues = config.hasIssues;
    this._hasProjects = config.hasProjects;
    this._hasWiki = config.hasWiki;
    this._homepageUrl = config.homepageUrl;
    this._isTemplate = config.isTemplate;
    this._licenseTemplate = config.licenseTemplate;
    this._name = config.name;
    this._private = config.private;
    this._topics = config.topics;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_merge_commit - computed: false, optional: true, required: false
  private _allowMergeCommit?: boolean;
  public get allowMergeCommit() {
    return this._allowMergeCommit;
  }
  public set allowMergeCommit(value: boolean | undefined) {
    this._allowMergeCommit = value;
  }

  // allow_rebase_merge - computed: false, optional: true, required: false
  private _allowRebaseMerge?: boolean;
  public get allowRebaseMerge() {
    return this._allowRebaseMerge;
  }
  public set allowRebaseMerge(value: boolean | undefined) {
    this._allowRebaseMerge = value;
  }

  // allow_squash_merge - computed: false, optional: true, required: false
  private _allowSquashMerge?: boolean;
  public get allowSquashMerge() {
    return this._allowSquashMerge;
  }
  public set allowSquashMerge(value: boolean | undefined) {
    this._allowSquashMerge = value;
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean;
  public get archived() {
    return this._archived;
  }
  public set archived(value: boolean | undefined) {
    this._archived = value;
  }

  // auto_init - computed: false, optional: true, required: false
  private _autoInit?: boolean;
  public get autoInit() {
    return this._autoInit;
  }
  public set autoInit(value: boolean | undefined) {
    this._autoInit = value;
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string;
  public get defaultBranch() {
    return this._defaultBranch ?? this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string | undefined) {
    this._defaultBranch = value;
  }

  // delete_branch_on_merge - computed: false, optional: true, required: false
  private _deleteBranchOnMerge?: boolean;
  public get deleteBranchOnMerge() {
    return this._deleteBranchOnMerge;
  }
  public set deleteBranchOnMerge(value: boolean | undefined) {
    this._deleteBranchOnMerge = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // etag - computed: true, optional: false, required: true
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // full_name - computed: true, optional: false, required: true
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // git_clone_url - computed: true, optional: false, required: true
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // gitignore_template - computed: false, optional: true, required: false
  private _gitignoreTemplate?: string;
  public get gitignoreTemplate() {
    return this._gitignoreTemplate;
  }
  public set gitignoreTemplate(value: string | undefined) {
    this._gitignoreTemplate = value;
  }

  // has_downloads - computed: false, optional: true, required: false
  private _hasDownloads?: boolean;
  public get hasDownloads() {
    return this._hasDownloads;
  }
  public set hasDownloads(value: boolean | undefined) {
    this._hasDownloads = value;
  }

  // has_issues - computed: false, optional: true, required: false
  private _hasIssues?: boolean;
  public get hasIssues() {
    return this._hasIssues;
  }
  public set hasIssues(value: boolean | undefined) {
    this._hasIssues = value;
  }

  // has_projects - computed: false, optional: true, required: false
  private _hasProjects?: boolean;
  public get hasProjects() {
    return this._hasProjects;
  }
  public set hasProjects(value: boolean | undefined) {
    this._hasProjects = value;
  }

  // has_wiki - computed: false, optional: true, required: false
  private _hasWiki?: boolean;
  public get hasWiki() {
    return this._hasWiki;
  }
  public set hasWiki(value: boolean | undefined) {
    this._hasWiki = value;
  }

  // homepage_url - computed: false, optional: true, required: false
  private _homepageUrl?: string;
  public get homepageUrl() {
    return this._homepageUrl;
  }
  public set homepageUrl(value: string | undefined) {
    this._homepageUrl = value;
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

  // is_template - computed: false, optional: true, required: false
  private _isTemplate?: boolean;
  public get isTemplate() {
    return this._isTemplate;
  }
  public set isTemplate(value: boolean | undefined) {
    this._isTemplate = value;
  }

  // license_template - computed: false, optional: true, required: false
  private _licenseTemplate?: string;
  public get licenseTemplate() {
    return this._licenseTemplate;
  }
  public set licenseTemplate(value: string | undefined) {
    this._licenseTemplate = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_id - computed: true, optional: false, required: true
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean;
  public get private() {
    return this._private;
  }
  public set private(value: boolean | undefined) {
    this._private = value;
  }

  // ssh_clone_url - computed: true, optional: false, required: true
  public get sshCloneUrl() {
    return this.getStringAttribute('ssh_clone_url');
  }

  // svn_url - computed: true, optional: false, required: true
  public get svnUrl() {
    return this.getStringAttribute('svn_url');
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: string[];
  public get topics() {
    return this._topics;
  }
  public set topics(value: string[] | undefined) {
    this._topics = value;
  }

  // template - computed: false, optional: true, required: false
  private _template?: RepositoryTemplate[];
  public get template() {
    return this._template;
  }
  public set template(value: RepositoryTemplate[] | undefined) {
    this._template = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_merge_commit: this._allowMergeCommit,
      allow_rebase_merge: this._allowRebaseMerge,
      allow_squash_merge: this._allowSquashMerge,
      archived: this._archived,
      auto_init: this._autoInit,
      default_branch: this._defaultBranch,
      delete_branch_on_merge: this._deleteBranchOnMerge,
      description: this._description,
      gitignore_template: this._gitignoreTemplate,
      has_downloads: this._hasDownloads,
      has_issues: this._hasIssues,
      has_projects: this._hasProjects,
      has_wiki: this._hasWiki,
      homepage_url: this._homepageUrl,
      is_template: this._isTemplate,
      license_template: this._licenseTemplate,
      name: this._name,
      private: this._private,
      topics: this._topics,
      template: this._template,
    };
  }
}
