# `github_repository`

Refer to the Terraform Registory for docs: [`github_repository`](https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository).

# `repository` Submodule <a name="`repository` Submodule" id="@cdktf/provider-github.repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Repository <a name="Repository" id="@cdktf/provider-github.repository.Repository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository github_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.Repository.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.Repository(scope: Construct, id: string, config: RepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repository.Repository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repository.Repository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putPages">putPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis">putSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putTemplate">putTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowAutoMerge">resetAllowAutoMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowMergeCommit">resetAllowMergeCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge">resetAllowRebaseMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowSquashMerge">resetAllowSquashMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch">resetAllowUpdateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy">resetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAutoInit">resetAutoInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge">resetDeleteBranchOnMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetGitignoreTemplate">resetGitignoreTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDiscussions">resetHasDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDownloads">resetHasDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasIssues">resetHasIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasProjects">resetHasProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasWiki">resetHasWiki</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHomepageUrl">resetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead">resetIgnoreVulnerabilityAlertsDuringRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIsTemplate">resetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetLicenseTemplate">resetLicenseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitMessage">resetMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitTitle">resetMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPages">resetPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPrivate">resetPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis">resetSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage">resetSquashMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle">resetSquashMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts">resetVulnerabilityAlerts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.Repository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repository.Repository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repository.Repository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repository.Repository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repository.Repository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPages` <a name="putPages" id="@cdktf/provider-github.repository.Repository.putPages"></a>

```typescript
public putPages(value: RepositoryPages): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `putSecurityAndAnalysis` <a name="putSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis"></a>

```typescript
public putSecurityAndAnalysis(value: RepositorySecurityAndAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `putTemplate` <a name="putTemplate" id="@cdktf/provider-github.repository.Repository.putTemplate"></a>

```typescript
public putTemplate(value: RepositoryTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `resetAllowAutoMerge` <a name="resetAllowAutoMerge" id="@cdktf/provider-github.repository.Repository.resetAllowAutoMerge"></a>

```typescript
public resetAllowAutoMerge(): void
```

##### `resetAllowMergeCommit` <a name="resetAllowMergeCommit" id="@cdktf/provider-github.repository.Repository.resetAllowMergeCommit"></a>

```typescript
public resetAllowMergeCommit(): void
```

##### `resetAllowRebaseMerge` <a name="resetAllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge"></a>

```typescript
public resetAllowRebaseMerge(): void
```

##### `resetAllowSquashMerge` <a name="resetAllowSquashMerge" id="@cdktf/provider-github.repository.Repository.resetAllowSquashMerge"></a>

```typescript
public resetAllowSquashMerge(): void
```

##### `resetAllowUpdateBranch` <a name="resetAllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch"></a>

```typescript
public resetAllowUpdateBranch(): void
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-github.repository.Repository.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetArchiveOnDestroy` <a name="resetArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy"></a>

```typescript
public resetArchiveOnDestroy(): void
```

##### `resetAutoInit` <a name="resetAutoInit" id="@cdktf/provider-github.repository.Repository.resetAutoInit"></a>

```typescript
public resetAutoInit(): void
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-github.repository.Repository.resetDefaultBranch"></a>

```typescript
public resetDefaultBranch(): void
```

##### `resetDeleteBranchOnMerge` <a name="resetDeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge"></a>

```typescript
public resetDeleteBranchOnMerge(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.repository.Repository.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGitignoreTemplate` <a name="resetGitignoreTemplate" id="@cdktf/provider-github.repository.Repository.resetGitignoreTemplate"></a>

```typescript
public resetGitignoreTemplate(): void
```

##### `resetHasDiscussions` <a name="resetHasDiscussions" id="@cdktf/provider-github.repository.Repository.resetHasDiscussions"></a>

```typescript
public resetHasDiscussions(): void
```

##### `resetHasDownloads` <a name="resetHasDownloads" id="@cdktf/provider-github.repository.Repository.resetHasDownloads"></a>

```typescript
public resetHasDownloads(): void
```

##### `resetHasIssues` <a name="resetHasIssues" id="@cdktf/provider-github.repository.Repository.resetHasIssues"></a>

```typescript
public resetHasIssues(): void
```

##### `resetHasProjects` <a name="resetHasProjects" id="@cdktf/provider-github.repository.Repository.resetHasProjects"></a>

```typescript
public resetHasProjects(): void
```

##### `resetHasWiki` <a name="resetHasWiki" id="@cdktf/provider-github.repository.Repository.resetHasWiki"></a>

```typescript
public resetHasWiki(): void
```

##### `resetHomepageUrl` <a name="resetHomepageUrl" id="@cdktf/provider-github.repository.Repository.resetHomepageUrl"></a>

```typescript
public resetHomepageUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repository.Repository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreVulnerabilityAlertsDuringRead` <a name="resetIgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead"></a>

```typescript
public resetIgnoreVulnerabilityAlertsDuringRead(): void
```

##### `resetIsTemplate` <a name="resetIsTemplate" id="@cdktf/provider-github.repository.Repository.resetIsTemplate"></a>

```typescript
public resetIsTemplate(): void
```

##### `resetLicenseTemplate` <a name="resetLicenseTemplate" id="@cdktf/provider-github.repository.Repository.resetLicenseTemplate"></a>

```typescript
public resetLicenseTemplate(): void
```

##### `resetMergeCommitMessage` <a name="resetMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetMergeCommitMessage"></a>

```typescript
public resetMergeCommitMessage(): void
```

##### `resetMergeCommitTitle` <a name="resetMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetMergeCommitTitle"></a>

```typescript
public resetMergeCommitTitle(): void
```

##### `resetPages` <a name="resetPages" id="@cdktf/provider-github.repository.Repository.resetPages"></a>

```typescript
public resetPages(): void
```

##### `resetPrivate` <a name="resetPrivate" id="@cdktf/provider-github.repository.Repository.resetPrivate"></a>

```typescript
public resetPrivate(): void
```

##### `resetSecurityAndAnalysis` <a name="resetSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis"></a>

```typescript
public resetSecurityAndAnalysis(): void
```

##### `resetSquashMergeCommitMessage` <a name="resetSquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage"></a>

```typescript
public resetSquashMergeCommitMessage(): void
```

##### `resetSquashMergeCommitTitle` <a name="resetSquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle"></a>

```typescript
public resetSquashMergeCommitTitle(): void
```

##### `resetTemplate` <a name="resetTemplate" id="@cdktf/provider-github.repository.Repository.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-github.repository.Repository.resetTopics"></a>

```typescript
public resetTopics(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-github.repository.Repository.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetVulnerabilityAlerts` <a name="resetVulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts"></a>

```typescript
public resetVulnerabilityAlerts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repository.Repository.isConstruct"></a>

```typescript
import { repository } from '@cdktf/provider-github'

repository.Repository.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repository.Repository.isTerraformElement"></a>

```typescript
import { repository } from '@cdktf/provider-github'

repository.Repository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repository.Repository.isTerraformResource"></a>

```typescript
import { repository } from '@cdktf/provider-github'

repository.Repository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repository.Repository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitCloneUrl">gitCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.httpCloneUrl">httpCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.primaryLanguage">primaryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.repoId">repoId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysis">securityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.sshCloneUrl">sshCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.svnUrl">svnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput">allowAutoMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput">allowMergeCommitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput">allowRebaseMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput">allowSquashMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput">allowUpdateBranchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput">archiveOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInitInput">autoInitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranchInput">defaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput">deleteBranchOnMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput">gitignoreTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput">hasDiscussionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloadsInput">hasDownloadsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssuesInput">hasIssuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjectsInput">hasProjectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWikiInput">hasWikiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrlInput">homepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput">ignoreVulnerabilityAlertsDuringReadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplateInput">isTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplateInput">licenseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput">mergeCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput">mergeCommitTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pagesInput">pagesInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.privateInput">privateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput">securityAndAnalysisInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput">squashMergeCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput">squashMergeCommitTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.templateInput">templateInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topicsInput">topicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput">vulnerabilityAlertsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMerge">allowAutoMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommit">allowMergeCommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMerge">allowRebaseMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMerge">allowSquashMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranch">allowUpdateBranch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInit">autoInit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge">deleteBranchOnMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplate">gitignoreTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussions">hasDiscussions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloads">hasDownloads</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssues">hasIssues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjects">hasProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWiki">hasWiki</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead">ignoreVulnerabilityAlertsDuringRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplate">isTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplate">licenseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessage">mergeCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitle">mergeCommitTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.private">private</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage">squashMergeCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle">squashMergeCommitTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repository.Repository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repository.Repository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.Repository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repository.Repository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repository.Repository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repository.Repository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.Repository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.Repository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repository.Repository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repository.Repository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.Repository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.Repository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.Repository.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repository.Repository.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-github.repository.Repository.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `gitCloneUrl`<sup>Required</sup> <a name="gitCloneUrl" id="@cdktf/provider-github.repository.Repository.property.gitCloneUrl"></a>

```typescript
public readonly gitCloneUrl: string;
```

- *Type:* string

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-github.repository.Repository.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `httpCloneUrl`<sup>Required</sup> <a name="httpCloneUrl" id="@cdktf/provider-github.repository.Repository.property.httpCloneUrl"></a>

```typescript
public readonly httpCloneUrl: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.repository.Repository.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktf/provider-github.repository.Repository.property.pages"></a>

```typescript
public readonly pages: RepositoryPagesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a>

---

##### `primaryLanguage`<sup>Required</sup> <a name="primaryLanguage" id="@cdktf/provider-github.repository.Repository.property.primaryLanguage"></a>

```typescript
public readonly primaryLanguage: string;
```

- *Type:* string

---

##### `repoId`<sup>Required</sup> <a name="repoId" id="@cdktf/provider-github.repository.Repository.property.repoId"></a>

```typescript
public readonly repoId: number;
```

- *Type:* number

---

##### `securityAndAnalysis`<sup>Required</sup> <a name="securityAndAnalysis" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysis"></a>

```typescript
public readonly securityAndAnalysis: RepositorySecurityAndAnalysisOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a>

---

##### `sshCloneUrl`<sup>Required</sup> <a name="sshCloneUrl" id="@cdktf/provider-github.repository.Repository.property.sshCloneUrl"></a>

```typescript
public readonly sshCloneUrl: string;
```

- *Type:* string

---

##### `svnUrl`<sup>Required</sup> <a name="svnUrl" id="@cdktf/provider-github.repository.Repository.property.svnUrl"></a>

```typescript
public readonly svnUrl: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-github.repository.Repository.property.template"></a>

```typescript
public readonly template: RepositoryTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a>

---

##### `allowAutoMergeInput`<sup>Optional</sup> <a name="allowAutoMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput"></a>

```typescript
public readonly allowAutoMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMergeCommitInput`<sup>Optional</sup> <a name="allowMergeCommitInput" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput"></a>

```typescript
public readonly allowMergeCommitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRebaseMergeInput`<sup>Optional</sup> <a name="allowRebaseMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput"></a>

```typescript
public readonly allowRebaseMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSquashMergeInput`<sup>Optional</sup> <a name="allowSquashMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput"></a>

```typescript
public readonly allowSquashMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdateBranchInput`<sup>Optional</sup> <a name="allowUpdateBranchInput" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput"></a>

```typescript
public readonly allowUpdateBranchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-github.repository.Repository.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnDestroyInput`<sup>Optional</sup> <a name="archiveOnDestroyInput" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput"></a>

```typescript
public readonly archiveOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoInitInput`<sup>Optional</sup> <a name="autoInitInput" id="@cdktf/provider-github.repository.Repository.property.autoInitInput"></a>

```typescript
public readonly autoInitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-github.repository.Repository.property.defaultBranchInput"></a>

```typescript
public readonly defaultBranchInput: string;
```

- *Type:* string

---

##### `deleteBranchOnMergeInput`<sup>Optional</sup> <a name="deleteBranchOnMergeInput" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput"></a>

```typescript
public readonly deleteBranchOnMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.repository.Repository.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gitignoreTemplateInput`<sup>Optional</sup> <a name="gitignoreTemplateInput" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput"></a>

```typescript
public readonly gitignoreTemplateInput: string;
```

- *Type:* string

---

##### `hasDiscussionsInput`<sup>Optional</sup> <a name="hasDiscussionsInput" id="@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput"></a>

```typescript
public readonly hasDiscussionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasDownloadsInput`<sup>Optional</sup> <a name="hasDownloadsInput" id="@cdktf/provider-github.repository.Repository.property.hasDownloadsInput"></a>

```typescript
public readonly hasDownloadsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasIssuesInput`<sup>Optional</sup> <a name="hasIssuesInput" id="@cdktf/provider-github.repository.Repository.property.hasIssuesInput"></a>

```typescript
public readonly hasIssuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasProjectsInput`<sup>Optional</sup> <a name="hasProjectsInput" id="@cdktf/provider-github.repository.Repository.property.hasProjectsInput"></a>

```typescript
public readonly hasProjectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasWikiInput`<sup>Optional</sup> <a name="hasWikiInput" id="@cdktf/provider-github.repository.Repository.property.hasWikiInput"></a>

```typescript
public readonly hasWikiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `homepageUrlInput`<sup>Optional</sup> <a name="homepageUrlInput" id="@cdktf/provider-github.repository.Repository.property.homepageUrlInput"></a>

```typescript
public readonly homepageUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repository.Repository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreVulnerabilityAlertsDuringReadInput`<sup>Optional</sup> <a name="ignoreVulnerabilityAlertsDuringReadInput" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput"></a>

```typescript
public readonly ignoreVulnerabilityAlertsDuringReadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTemplateInput`<sup>Optional</sup> <a name="isTemplateInput" id="@cdktf/provider-github.repository.Repository.property.isTemplateInput"></a>

```typescript
public readonly isTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseTemplateInput`<sup>Optional</sup> <a name="licenseTemplateInput" id="@cdktf/provider-github.repository.Repository.property.licenseTemplateInput"></a>

```typescript
public readonly licenseTemplateInput: string;
```

- *Type:* string

---

##### `mergeCommitMessageInput`<sup>Optional</sup> <a name="mergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput"></a>

```typescript
public readonly mergeCommitMessageInput: string;
```

- *Type:* string

---

##### `mergeCommitTitleInput`<sup>Optional</sup> <a name="mergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput"></a>

```typescript
public readonly mergeCommitTitleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.repository.Repository.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pagesInput`<sup>Optional</sup> <a name="pagesInput" id="@cdktf/provider-github.repository.Repository.property.pagesInput"></a>

```typescript
public readonly pagesInput: RepositoryPages;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `privateInput`<sup>Optional</sup> <a name="privateInput" id="@cdktf/provider-github.repository.Repository.property.privateInput"></a>

```typescript
public readonly privateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAndAnalysisInput`<sup>Optional</sup> <a name="securityAndAnalysisInput" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput"></a>

```typescript
public readonly securityAndAnalysisInput: RepositorySecurityAndAnalysis;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `squashMergeCommitMessageInput`<sup>Optional</sup> <a name="squashMergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput"></a>

```typescript
public readonly squashMergeCommitMessageInput: string;
```

- *Type:* string

---

##### `squashMergeCommitTitleInput`<sup>Optional</sup> <a name="squashMergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput"></a>

```typescript
public readonly squashMergeCommitTitleInput: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktf/provider-github.repository.Repository.property.templateInput"></a>

```typescript
public readonly templateInput: RepositoryTemplate;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-github.repository.Repository.property.topicsInput"></a>

```typescript
public readonly topicsInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.repository.Repository.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `vulnerabilityAlertsInput`<sup>Optional</sup> <a name="vulnerabilityAlertsInput" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput"></a>

```typescript
public readonly vulnerabilityAlertsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAutoMerge`<sup>Required</sup> <a name="allowAutoMerge" id="@cdktf/provider-github.repository.Repository.property.allowAutoMerge"></a>

```typescript
public readonly allowAutoMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMergeCommit`<sup>Required</sup> <a name="allowMergeCommit" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommit"></a>

```typescript
public readonly allowMergeCommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRebaseMerge`<sup>Required</sup> <a name="allowRebaseMerge" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMerge"></a>

```typescript
public readonly allowRebaseMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSquashMerge`<sup>Required</sup> <a name="allowSquashMerge" id="@cdktf/provider-github.repository.Repository.property.allowSquashMerge"></a>

```typescript
public readonly allowSquashMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowUpdateBranch`<sup>Required</sup> <a name="allowUpdateBranch" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranch"></a>

```typescript
public readonly allowUpdateBranch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-github.repository.Repository.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnDestroy`<sup>Required</sup> <a name="archiveOnDestroy" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroy"></a>

```typescript
public readonly archiveOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoInit`<sup>Required</sup> <a name="autoInit" id="@cdktf/provider-github.repository.Repository.property.autoInit"></a>

```typescript
public readonly autoInit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-github.repository.Repository.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `deleteBranchOnMerge`<sup>Required</sup> <a name="deleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge"></a>

```typescript
public readonly deleteBranchOnMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.repository.Repository.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gitignoreTemplate`<sup>Required</sup> <a name="gitignoreTemplate" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplate"></a>

```typescript
public readonly gitignoreTemplate: string;
```

- *Type:* string

---

##### `hasDiscussions`<sup>Required</sup> <a name="hasDiscussions" id="@cdktf/provider-github.repository.Repository.property.hasDiscussions"></a>

```typescript
public readonly hasDiscussions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasDownloads`<sup>Required</sup> <a name="hasDownloads" id="@cdktf/provider-github.repository.Repository.property.hasDownloads"></a>

```typescript
public readonly hasDownloads: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasIssues`<sup>Required</sup> <a name="hasIssues" id="@cdktf/provider-github.repository.Repository.property.hasIssues"></a>

```typescript
public readonly hasIssues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasProjects`<sup>Required</sup> <a name="hasProjects" id="@cdktf/provider-github.repository.Repository.property.hasProjects"></a>

```typescript
public readonly hasProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hasWiki`<sup>Required</sup> <a name="hasWiki" id="@cdktf/provider-github.repository.Repository.property.hasWiki"></a>

```typescript
public readonly hasWiki: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `homepageUrl`<sup>Required</sup> <a name="homepageUrl" id="@cdktf/provider-github.repository.Repository.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repository.Repository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreVulnerabilityAlertsDuringRead`<sup>Required</sup> <a name="ignoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead"></a>

```typescript
public readonly ignoreVulnerabilityAlertsDuringRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTemplate`<sup>Required</sup> <a name="isTemplate" id="@cdktf/provider-github.repository.Repository.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseTemplate`<sup>Required</sup> <a name="licenseTemplate" id="@cdktf/provider-github.repository.Repository.property.licenseTemplate"></a>

```typescript
public readonly licenseTemplate: string;
```

- *Type:* string

---

##### `mergeCommitMessage`<sup>Required</sup> <a name="mergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessage"></a>

```typescript
public readonly mergeCommitMessage: string;
```

- *Type:* string

---

##### `mergeCommitTitle`<sup>Required</sup> <a name="mergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitle"></a>

```typescript
public readonly mergeCommitTitle: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.Repository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-github.repository.Repository.property.private"></a>

```typescript
public readonly private: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `squashMergeCommitMessage`<sup>Required</sup> <a name="squashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage"></a>

```typescript
public readonly squashMergeCommitMessage: string;
```

- *Type:* string

---

##### `squashMergeCommitTitle`<sup>Required</sup> <a name="squashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle"></a>

```typescript
public readonly squashMergeCommitTitle: string;
```

- *Type:* string

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-github.repository.Repository.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.repository.Repository.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `vulnerabilityAlerts`<sup>Required</sup> <a name="vulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts"></a>

```typescript
public readonly vulnerabilityAlerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repository.Repository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryConfig <a name="RepositoryConfig" id="@cdktf/provider-github.repository.RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryConfig.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositoryConfig: repository.RepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.name">name</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge">allowAutoMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit">allowMergeCommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge">allowRebaseMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge">allowSquashMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch">allowUpdateBranch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.autoInit">autoInit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge">deleteBranchOnMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.description">description</a></code> | <code>string</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate">gitignoreTemplate</a></code> | <code>string</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions">hasDiscussions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads">hasDownloads</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues">hasIssues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects">hasProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki">hasWiki</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl">homepageUrl</a></code> | <code>string</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead">ignoreVulnerabilityAlertsDuringRead</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate">isTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate">licenseTemplate</a></code> | <code>string</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage">mergeCommitMessage</a></code> | <code>string</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle">mergeCommitTitle</a></code> | <code>string</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.pages">pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.private">private</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis">securityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage">squashMergeCommitMessage</a></code> | <code>string</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle">squashMergeCommitTitle</a></code> | <code>string</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.topics">topics</a></code> | <code>string[]</code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.visibility">visibility</a></code> | <code>string</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts">vulnerabilityAlerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repository.RepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repository.RepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repository.RepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repository.RepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repository.RepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.repository.RepositoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#name Repository#name}

---

##### `allowAutoMerge`<sup>Optional</sup> <a name="allowAutoMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge"></a>

```typescript
public readonly allowAutoMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `allowMergeCommit`<sup>Optional</sup> <a name="allowMergeCommit" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit"></a>

```typescript
public readonly allowMergeCommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `allowRebaseMerge`<sup>Optional</sup> <a name="allowRebaseMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge"></a>

```typescript
public readonly allowRebaseMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `allowSquashMerge`<sup>Optional</sup> <a name="allowSquashMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge"></a>

```typescript
public readonly allowSquashMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `allowUpdateBranch`<sup>Optional</sup> <a name="allowUpdateBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch"></a>

```typescript
public readonly allowUpdateBranch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-github.repository.RepositoryConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#archived Repository#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy"></a>

```typescript
public readonly archiveOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `autoInit`<sup>Optional</sup> <a name="autoInit" id="@cdktf/provider-github.repository.RepositoryConfig.property.autoInit"></a>

```typescript
public readonly autoInit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `deleteBranchOnMerge`<sup>Optional</sup> <a name="deleteBranchOnMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge"></a>

```typescript
public readonly deleteBranchOnMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repository.RepositoryConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#description Repository#description}

---

##### `gitignoreTemplate`<sup>Optional</sup> <a name="gitignoreTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate"></a>

```typescript
public readonly gitignoreTemplate: string;
```

- *Type:* string

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `hasDiscussions`<sup>Optional</sup> <a name="hasDiscussions" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions"></a>

```typescript
public readonly hasDiscussions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `hasDownloads`<sup>Optional</sup> <a name="hasDownloads" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads"></a>

```typescript
public readonly hasDownloads: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `hasIssues`<sup>Optional</sup> <a name="hasIssues" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues"></a>

```typescript
public readonly hasIssues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `hasProjects`<sup>Optional</sup> <a name="hasProjects" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects"></a>

```typescript
public readonly hasProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `hasWiki`<sup>Optional</sup> <a name="hasWiki" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki"></a>

```typescript
public readonly hasWiki: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `homepageUrl`<sup>Optional</sup> <a name="homepageUrl" id="@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl"></a>

```typescript
public readonly homepageUrl: string;
```

- *Type:* string

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repository.RepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreVulnerabilityAlertsDuringRead`<sup>Optional</sup> <a name="ignoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead"></a>

```typescript
public readonly ignoreVulnerabilityAlertsDuringRead: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `isTemplate`<sup>Optional</sup> <a name="isTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate"></a>

```typescript
public readonly isTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#is_template Repository#is_template}

---

##### `licenseTemplate`<sup>Optional</sup> <a name="licenseTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate"></a>

```typescript
public readonly licenseTemplate: string;
```

- *Type:* string

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#license_template Repository#license_template}

---

##### `mergeCommitMessage`<sup>Optional</sup> <a name="mergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage"></a>

```typescript
public readonly mergeCommitMessage: string;
```

- *Type:* string

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `mergeCommitTitle`<sup>Optional</sup> <a name="mergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle"></a>

```typescript
public readonly mergeCommitTitle: string;
```

- *Type:* string

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `pages`<sup>Optional</sup> <a name="pages" id="@cdktf/provider-github.repository.RepositoryConfig.property.pages"></a>

```typescript
public readonly pages: RepositoryPages;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#pages Repository#pages}

---

##### `private`<sup>Optional</sup> <a name="private" id="@cdktf/provider-github.repository.RepositoryConfig.property.private"></a>

```typescript
public readonly private: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#private Repository#private}.

---

##### `securityAndAnalysis`<sup>Optional</sup> <a name="securityAndAnalysis" id="@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis"></a>

```typescript
public readonly securityAndAnalysis: RepositorySecurityAndAnalysis;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `squashMergeCommitMessage`<sup>Optional</sup> <a name="squashMergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage"></a>

```typescript
public readonly squashMergeCommitMessage: string;
```

- *Type:* string

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `squashMergeCommitTitle`<sup>Optional</sup> <a name="squashMergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle"></a>

```typescript
public readonly squashMergeCommitTitle: string;
```

- *Type:* string

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktf/provider-github.repository.RepositoryConfig.property.template"></a>

```typescript
public readonly template: RepositoryTemplate;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#template Repository#template}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-github.repository.RepositoryConfig.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#topics Repository#topics}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-github.repository.RepositoryConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#visibility Repository#visibility}

---

##### `vulnerabilityAlerts`<sup>Optional</sup> <a name="vulnerabilityAlerts" id="@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts"></a>

```typescript
public readonly vulnerabilityAlerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

### RepositoryPages <a name="RepositoryPages" id="@cdktf/provider-github.repository.RepositoryPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPages.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositoryPages: repository.RepositoryPages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.buildType">buildType</a></code> | <code>string</code> | The type the page should be sourced. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.cname">cname</a></code> | <code>string</code> | The custom domain for the repository. This can only be set after the repository has been created. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | source block. |

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/provider-github.repository.RepositoryPages.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

The type the page should be sourced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#build_type Repository#build_type}

---

##### `cname`<sup>Optional</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPages.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#cname Repository#cname}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPages.property.source"></a>

```typescript
public readonly source: RepositoryPagesSource;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#source Repository#source}

---

### RepositoryPagesSource <a name="RepositoryPagesSource" id="@cdktf/provider-github.repository.RepositoryPagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPagesSource.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositoryPagesSource: repository.RepositoryPagesSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.branch">branch</a></code> | <code>string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.path">path</a></code> | <code>string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#branch Repository#branch}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#path Repository#path}

---

### RepositorySecurityAndAnalysis <a name="RepositorySecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositorySecurityAndAnalysis: repository.RepositorySecurityAndAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity">advancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | advanced_security block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning">secretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | secret_scanning block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection">secretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | secret_scanning_push_protection block. |

---

##### `advancedSecurity`<sup>Optional</sup> <a name="advancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity"></a>

```typescript
public readonly advancedSecurity: RepositorySecurityAndAnalysisAdvancedSecurity;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#advanced_security Repository#advanced_security}

---

##### `secretScanning`<sup>Optional</sup> <a name="secretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning"></a>

```typescript
public readonly secretScanning: RepositorySecurityAndAnalysisSecretScanning;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#secret_scanning Repository#secret_scanning}

---

##### `secretScanningPushProtection`<sup>Optional</sup> <a name="secretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection"></a>

```typescript
public readonly secretScanningPushProtection: RepositorySecurityAndAnalysisSecretScanningPushProtection;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

### RepositorySecurityAndAnalysisAdvancedSecurity <a name="RepositorySecurityAndAnalysisAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositorySecurityAndAnalysisAdvancedSecurity: repository.RepositorySecurityAndAnalysisAdvancedSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status">status</a></code> | <code>string</code> | Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanning <a name="RepositorySecurityAndAnalysisSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositorySecurityAndAnalysisSecretScanning: repository.RepositorySecurityAndAnalysisSecretScanning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status">status</a></code> | <code>string</code> | Set to 'enabled' to enable secret scanning on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanningPushProtection <a name="RepositorySecurityAndAnalysisSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositorySecurityAndAnalysisSecretScanningPushProtection: repository.RepositorySecurityAndAnalysisSecretScanningPushProtection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status">status</a></code> | <code>string</code> | Set to 'enabled' to enable secret scanning push protection on the repository. |

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#status Repository#status}

---

### RepositoryTemplate <a name="RepositoryTemplate" id="@cdktf/provider-github.repository.RepositoryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryTemplate.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

const repositoryTemplate: repository.RepositoryTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.owner">owner</a></code> | <code>string</code> | The GitHub organization or user the template repository is owned by. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.repository">repository</a></code> | <code>string</code> | The name of the template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches">includeAllBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template). |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplate.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#owner Repository#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#repository Repository#repository}

---

##### `includeAllBranches`<sup>Optional</sup> <a name="includeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches"></a>

```typescript
public readonly includeAllBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.37.0/docs/resources/repository#include_all_branches Repository#include_all_branches}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesOutputReference <a name="RepositoryPagesOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositoryPagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname">resetCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource"></a>

```typescript
public putSource(value: RepositoryPagesSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `resetBuildType` <a name="resetBuildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType"></a>

```typescript
public resetBuildType(): void
```

##### `resetCname` <a name="resetCname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname"></a>

```typescript
public resetCname(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404">custom404</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput">buildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput">cnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType">buildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `custom404`<sup>Required</sup> <a name="custom404" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404"></a>

```typescript
public readonly custom404: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source"></a>

```typescript
public readonly source: RepositoryPagesSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput"></a>

```typescript
public readonly buildTypeInput: string;
```

- *Type:* string

---

##### `cnameInput`<sup>Optional</sup> <a name="cnameInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput"></a>

```typescript
public readonly cnameInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: RepositoryPagesSource;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryPages;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---


### RepositoryPagesSourceOutputReference <a name="RepositoryPagesSourceOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositoryPagesSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryPagesSource;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---


### RepositorySecurityAndAnalysisAdvancedSecurityOutputReference <a name="RepositorySecurityAndAnalysisAdvancedSecurityOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositorySecurityAndAnalysisAdvancedSecurity;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---


### RepositorySecurityAndAnalysisOutputReference <a name="RepositorySecurityAndAnalysisOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositorySecurityAndAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity">putAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning">putSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection">putSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity">resetAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning">resetSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection">resetSecretScanningPushProtection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedSecurity` <a name="putAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity"></a>

```typescript
public putAdvancedSecurity(value: RepositorySecurityAndAnalysisAdvancedSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `putSecretScanning` <a name="putSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning"></a>

```typescript
public putSecretScanning(value: RepositorySecurityAndAnalysisSecretScanning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `putSecretScanningPushProtection` <a name="putSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection"></a>

```typescript
public putSecretScanningPushProtection(value: RepositorySecurityAndAnalysisSecretScanningPushProtection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `resetAdvancedSecurity` <a name="resetAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity"></a>

```typescript
public resetAdvancedSecurity(): void
```

##### `resetSecretScanning` <a name="resetSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning"></a>

```typescript
public resetSecretScanning(): void
```

##### `resetSecretScanningPushProtection` <a name="resetSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection"></a>

```typescript
public resetSecretScanningPushProtection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity">advancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning">secretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection">secretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput">advancedSecurityInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput">secretScanningInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput">secretScanningPushProtectionInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedSecurity`<sup>Required</sup> <a name="advancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity"></a>

```typescript
public readonly advancedSecurity: RepositorySecurityAndAnalysisAdvancedSecurityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a>

---

##### `secretScanning`<sup>Required</sup> <a name="secretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning"></a>

```typescript
public readonly secretScanning: RepositorySecurityAndAnalysisSecretScanningOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a>

---

##### `secretScanningPushProtection`<sup>Required</sup> <a name="secretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection"></a>

```typescript
public readonly secretScanningPushProtection: RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a>

---

##### `advancedSecurityInput`<sup>Optional</sup> <a name="advancedSecurityInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput"></a>

```typescript
public readonly advancedSecurityInput: RepositorySecurityAndAnalysisAdvancedSecurity;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `secretScanningInput`<sup>Optional</sup> <a name="secretScanningInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput"></a>

```typescript
public readonly secretScanningInput: RepositorySecurityAndAnalysisSecretScanning;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `secretScanningPushProtectionInput`<sup>Optional</sup> <a name="secretScanningPushProtectionInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput"></a>

```typescript
public readonly secretScanningPushProtectionInput: RepositorySecurityAndAnalysisSecretScanningPushProtection;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositorySecurityAndAnalysis;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---


### RepositorySecurityAndAnalysisSecretScanningOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositorySecurityAndAnalysisSecretScanningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositorySecurityAndAnalysisSecretScanning;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---


### RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositorySecurityAndAnalysisSecretScanningPushProtection;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---


### RepositoryTemplateOutputReference <a name="RepositoryTemplateOutputReference" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer"></a>

```typescript
import { repository } from '@cdktf/provider-github'

new repository.RepositoryTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches">resetIncludeAllBranches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeAllBranches` <a name="resetIncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches"></a>

```typescript
public resetIncludeAllBranches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput">includeAllBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches">includeAllBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeAllBranchesInput`<sup>Optional</sup> <a name="includeAllBranchesInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput"></a>

```typescript
public readonly includeAllBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `includeAllBranches`<sup>Required</sup> <a name="includeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches"></a>

```typescript
public readonly includeAllBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RepositoryTemplate;
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---



