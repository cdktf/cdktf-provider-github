// https://www.terraform.io/docs/providers/github/r/repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#allow_merge_commit Repository#allow_merge_commit}
  */
  readonly allowMergeCommit?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#allow_rebase_merge Repository#allow_rebase_merge}
  */
  readonly allowRebaseMerge?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#allow_squash_merge Repository#allow_squash_merge}
  */
  readonly allowSquashMerge?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#archive_on_destroy Repository#archive_on_destroy}
  */
  readonly archiveOnDestroy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#archived Repository#archived}
  */
  readonly archived?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#auto_init Repository#auto_init}
  */
  readonly autoInit?: boolean;
  /**
  * Can only be set after initial repository creation, and only if the target branch exists
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#default_branch Repository#default_branch}
  */
  readonly defaultBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#delete_branch_on_merge Repository#delete_branch_on_merge}
  */
  readonly deleteBranchOnMerge?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#description Repository#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#gitignore_template Repository#gitignore_template}
  */
  readonly gitignoreTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#has_downloads Repository#has_downloads}
  */
  readonly hasDownloads?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#has_issues Repository#has_issues}
  */
  readonly hasIssues?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#has_projects Repository#has_projects}
  */
  readonly hasProjects?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#has_wiki Repository#has_wiki}
  */
  readonly hasWiki?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#homepage_url Repository#homepage_url}
  */
  readonly homepageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#is_template Repository#is_template}
  */
  readonly isTemplate?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#license_template Repository#license_template}
  */
  readonly licenseTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#name Repository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#private Repository#private}
  */
  readonly private?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#topics Repository#topics}
  */
  readonly topics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#visibility Repository#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#vulnerability_alerts Repository#vulnerability_alerts}
  */
  readonly vulnerabilityAlerts?: boolean;
  /**
  * pages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#pages Repository#pages}
  */
  readonly pages?: RepositoryPages[];
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#template Repository#template}
  */
  readonly template?: RepositoryTemplate[];
}
export interface RepositoryPagesSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#branch Repository#branch}
  */
  readonly branch: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#path Repository#path}
  */
  readonly path?: string;
}

function repositoryPagesSourceToTerraform(struct?: RepositoryPagesSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface RepositoryPages {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#cname Repository#cname}
  */
  readonly cname?: string;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#source Repository#source}
  */
  readonly source: RepositoryPagesSource[];
}

function repositoryPagesToTerraform(struct?: RepositoryPages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cname: cdktf.stringToTerraform(struct!.cname),
    source: cdktf.listMapper(repositoryPagesSourceToTerraform)(struct!.source),
  }
}

export interface RepositoryTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#owner Repository#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository.html#repository Repository#repository}
  */
  readonly repository: string;
}

function repositoryTemplateToTerraform(struct?: RepositoryTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/repository.html github_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/repository.html github_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
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
    this._archiveOnDestroy = config.archiveOnDestroy;
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
    this._visibility = config.visibility;
    this._vulnerabilityAlerts = config.vulnerabilityAlerts;
    this._pages = config.pages;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_merge_commit - computed: false, optional: true, required: false
  private _allowMergeCommit?: boolean;
  public get allowMergeCommit() {
    return this.getBooleanAttribute('allow_merge_commit');
  }
  public set allowMergeCommit(value: boolean ) {
    this._allowMergeCommit = value;
  }
  public resetAllowMergeCommit() {
    this._allowMergeCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMergeCommitInput() {
    return this._allowMergeCommit
  }

  // allow_rebase_merge - computed: false, optional: true, required: false
  private _allowRebaseMerge?: boolean;
  public get allowRebaseMerge() {
    return this.getBooleanAttribute('allow_rebase_merge');
  }
  public set allowRebaseMerge(value: boolean ) {
    this._allowRebaseMerge = value;
  }
  public resetAllowRebaseMerge() {
    this._allowRebaseMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRebaseMergeInput() {
    return this._allowRebaseMerge
  }

  // allow_squash_merge - computed: false, optional: true, required: false
  private _allowSquashMerge?: boolean;
  public get allowSquashMerge() {
    return this.getBooleanAttribute('allow_squash_merge');
  }
  public set allowSquashMerge(value: boolean ) {
    this._allowSquashMerge = value;
  }
  public resetAllowSquashMerge() {
    this._allowSquashMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSquashMergeInput() {
    return this._allowSquashMerge
  }

  // archive_on_destroy - computed: false, optional: true, required: false
  private _archiveOnDestroy?: boolean;
  public get archiveOnDestroy() {
    return this.getBooleanAttribute('archive_on_destroy');
  }
  public set archiveOnDestroy(value: boolean ) {
    this._archiveOnDestroy = value;
  }
  public resetArchiveOnDestroy() {
    this._archiveOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveOnDestroyInput() {
    return this._archiveOnDestroy
  }

  // archived - computed: false, optional: true, required: false
  private _archived?: boolean;
  public get archived() {
    return this.getBooleanAttribute('archived');
  }
  public set archived(value: boolean ) {
    this._archived = value;
  }
  public resetArchived() {
    this._archived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivedInput() {
    return this._archived
  }

  // auto_init - computed: false, optional: true, required: false
  private _autoInit?: boolean;
  public get autoInit() {
    return this.getBooleanAttribute('auto_init');
  }
  public set autoInit(value: boolean ) {
    this._autoInit = value;
  }
  public resetAutoInit() {
    this._autoInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInitInput() {
    return this._autoInit
  }

  // default_branch - computed: true, optional: true, required: false
  private _defaultBranch?: string;
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  public resetDefaultBranch() {
    this._defaultBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch
  }

  // delete_branch_on_merge - computed: false, optional: true, required: false
  private _deleteBranchOnMerge?: boolean;
  public get deleteBranchOnMerge() {
    return this.getBooleanAttribute('delete_branch_on_merge');
  }
  public set deleteBranchOnMerge(value: boolean ) {
    this._deleteBranchOnMerge = value;
  }
  public resetDeleteBranchOnMerge() {
    this._deleteBranchOnMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBranchOnMergeInput() {
    return this._deleteBranchOnMerge
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // git_clone_url - computed: true, optional: false, required: false
  public get gitCloneUrl() {
    return this.getStringAttribute('git_clone_url');
  }

  // gitignore_template - computed: false, optional: true, required: false
  private _gitignoreTemplate?: string;
  public get gitignoreTemplate() {
    return this.getStringAttribute('gitignore_template');
  }
  public set gitignoreTemplate(value: string ) {
    this._gitignoreTemplate = value;
  }
  public resetGitignoreTemplate() {
    this._gitignoreTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitignoreTemplateInput() {
    return this._gitignoreTemplate
  }

  // has_downloads - computed: false, optional: true, required: false
  private _hasDownloads?: boolean;
  public get hasDownloads() {
    return this.getBooleanAttribute('has_downloads');
  }
  public set hasDownloads(value: boolean ) {
    this._hasDownloads = value;
  }
  public resetHasDownloads() {
    this._hasDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasDownloadsInput() {
    return this._hasDownloads
  }

  // has_issues - computed: false, optional: true, required: false
  private _hasIssues?: boolean;
  public get hasIssues() {
    return this.getBooleanAttribute('has_issues');
  }
  public set hasIssues(value: boolean ) {
    this._hasIssues = value;
  }
  public resetHasIssues() {
    this._hasIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasIssuesInput() {
    return this._hasIssues
  }

  // has_projects - computed: false, optional: true, required: false
  private _hasProjects?: boolean;
  public get hasProjects() {
    return this.getBooleanAttribute('has_projects');
  }
  public set hasProjects(value: boolean ) {
    this._hasProjects = value;
  }
  public resetHasProjects() {
    this._hasProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasProjectsInput() {
    return this._hasProjects
  }

  // has_wiki - computed: false, optional: true, required: false
  private _hasWiki?: boolean;
  public get hasWiki() {
    return this.getBooleanAttribute('has_wiki');
  }
  public set hasWiki(value: boolean ) {
    this._hasWiki = value;
  }
  public resetHasWiki() {
    this._hasWiki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasWikiInput() {
    return this._hasWiki
  }

  // homepage_url - computed: false, optional: true, required: false
  private _homepageUrl?: string;
  public get homepageUrl() {
    return this.getStringAttribute('homepage_url');
  }
  public set homepageUrl(value: string ) {
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

  // is_template - computed: false, optional: true, required: false
  private _isTemplate?: boolean;
  public get isTemplate() {
    return this.getBooleanAttribute('is_template');
  }
  public set isTemplate(value: boolean ) {
    this._isTemplate = value;
  }
  public resetIsTemplate() {
    this._isTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemplateInput() {
    return this._isTemplate
  }

  // license_template - computed: false, optional: true, required: false
  private _licenseTemplate?: string;
  public get licenseTemplate() {
    return this.getStringAttribute('license_template');
  }
  public set licenseTemplate(value: string ) {
    this._licenseTemplate = value;
  }
  public resetLicenseTemplate() {
    this._licenseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTemplateInput() {
    return this._licenseTemplate
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // private - computed: true, optional: true, required: false
  private _private?: boolean;
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private
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

  // topics - computed: false, optional: true, required: false
  private _topics?: string[];
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[] ) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string;
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility
  }

  // vulnerability_alerts - computed: false, optional: true, required: false
  private _vulnerabilityAlerts?: boolean;
  public get vulnerabilityAlerts() {
    return this.getBooleanAttribute('vulnerability_alerts');
  }
  public set vulnerabilityAlerts(value: boolean ) {
    this._vulnerabilityAlerts = value;
  }
  public resetVulnerabilityAlerts() {
    this._vulnerabilityAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityAlertsInput() {
    return this._vulnerabilityAlerts
  }

  // pages - computed: false, optional: true, required: false
  private _pages?: RepositoryPages[];
  public get pages() {
    return this.interpolationForAttribute('pages') as any;
  }
  public set pages(value: RepositoryPages[] ) {
    this._pages = value;
  }
  public resetPages() {
    this._pages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagesInput() {
    return this._pages
  }

  // template - computed: false, optional: true, required: false
  private _template?: RepositoryTemplate[];
  public get template() {
    return this.interpolationForAttribute('template') as any;
  }
  public set template(value: RepositoryTemplate[] ) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_merge_commit: cdktf.booleanToTerraform(this._allowMergeCommit),
      allow_rebase_merge: cdktf.booleanToTerraform(this._allowRebaseMerge),
      allow_squash_merge: cdktf.booleanToTerraform(this._allowSquashMerge),
      archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
      archived: cdktf.booleanToTerraform(this._archived),
      auto_init: cdktf.booleanToTerraform(this._autoInit),
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      delete_branch_on_merge: cdktf.booleanToTerraform(this._deleteBranchOnMerge),
      description: cdktf.stringToTerraform(this._description),
      gitignore_template: cdktf.stringToTerraform(this._gitignoreTemplate),
      has_downloads: cdktf.booleanToTerraform(this._hasDownloads),
      has_issues: cdktf.booleanToTerraform(this._hasIssues),
      has_projects: cdktf.booleanToTerraform(this._hasProjects),
      has_wiki: cdktf.booleanToTerraform(this._hasWiki),
      homepage_url: cdktf.stringToTerraform(this._homepageUrl),
      is_template: cdktf.booleanToTerraform(this._isTemplate),
      license_template: cdktf.stringToTerraform(this._licenseTemplate),
      name: cdktf.stringToTerraform(this._name),
      private: cdktf.booleanToTerraform(this._private),
      topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
      visibility: cdktf.stringToTerraform(this._visibility),
      vulnerability_alerts: cdktf.booleanToTerraform(this._vulnerabilityAlerts),
      pages: cdktf.listMapper(repositoryPagesToTerraform)(this._pages),
      template: cdktf.listMapper(repositoryTemplateToTerraform)(this._template),
    };
  }
}
