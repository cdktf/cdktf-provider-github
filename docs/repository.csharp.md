# `repository` Submodule <a name="`repository` Submodule" id="@cdktf/provider-github.repository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Repository <a name="Repository" id="@cdktf/provider-github.repository.Repository"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository github_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.Repository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new Repository(Construct Scope, string Id, RepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repository.Repository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryConfig">RepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repository.Repository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repository.Repository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repository.Repository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repository.Repository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repository.Repository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repository.Repository.putPages">PutPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis">PutSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.putTemplate">PutTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowAutoMerge">ResetAllowAutoMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowMergeCommit">ResetAllowMergeCommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge">ResetAllowRebaseMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowSquashMerge">ResetAllowSquashMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch">ResetAllowUpdateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy">ResetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetAutoInit">ResetAutoInit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge">ResetDeleteBranchOnMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetGitignoreTemplate">ResetGitignoreTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDiscussions">ResetHasDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasDownloads">ResetHasDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasIssues">ResetHasIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasProjects">ResetHasProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHasWiki">ResetHasWiki</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead">ResetIgnoreVulnerabilityAlertsDuringRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetIsTemplate">ResetIsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetLicenseTemplate">ResetLicenseTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitMessage">ResetMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetMergeCommitTitle">ResetMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPages">ResetPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetPrivate">ResetPrivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis">ResetSecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage">ResetSquashMergeCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle">ResetSquashMergeCommitTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVisibility">ResetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts">ResetVulnerabilityAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.resetWebCommitSignoffRequired">ResetWebCommitSignoffRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.Repository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repository.Repository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.Repository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repository.Repository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repository.Repository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.repository.Repository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repository.Repository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repository.Repository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repository.Repository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repository.Repository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repository.Repository.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repository.Repository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.Repository.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.Repository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repository.Repository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repository.Repository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repository.Repository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repository.Repository.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repository.Repository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPages` <a name="PutPages" id="@cdktf/provider-github.repository.Repository.putPages"></a>

```csharp
private void PutPages(RepositoryPages Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.Repository.putPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `PutSecurityAndAnalysis` <a name="PutSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis"></a>

```csharp
private void PutSecurityAndAnalysis(RepositorySecurityAndAnalysis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.Repository.putSecurityAndAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `PutTemplate` <a name="PutTemplate" id="@cdktf/provider-github.repository.Repository.putTemplate"></a>

```csharp
private void PutTemplate(RepositoryTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.Repository.putTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `ResetAllowAutoMerge` <a name="ResetAllowAutoMerge" id="@cdktf/provider-github.repository.Repository.resetAllowAutoMerge"></a>

```csharp
private void ResetAllowAutoMerge()
```

##### `ResetAllowMergeCommit` <a name="ResetAllowMergeCommit" id="@cdktf/provider-github.repository.Repository.resetAllowMergeCommit"></a>

```csharp
private void ResetAllowMergeCommit()
```

##### `ResetAllowRebaseMerge` <a name="ResetAllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.resetAllowRebaseMerge"></a>

```csharp
private void ResetAllowRebaseMerge()
```

##### `ResetAllowSquashMerge` <a name="ResetAllowSquashMerge" id="@cdktf/provider-github.repository.Repository.resetAllowSquashMerge"></a>

```csharp
private void ResetAllowSquashMerge()
```

##### `ResetAllowUpdateBranch` <a name="ResetAllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.resetAllowUpdateBranch"></a>

```csharp
private void ResetAllowUpdateBranch()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-github.repository.Repository.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetArchiveOnDestroy` <a name="ResetArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.resetArchiveOnDestroy"></a>

```csharp
private void ResetArchiveOnDestroy()
```

##### `ResetAutoInit` <a name="ResetAutoInit" id="@cdktf/provider-github.repository.Repository.resetAutoInit"></a>

```csharp
private void ResetAutoInit()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-github.repository.Repository.resetDefaultBranch"></a>

```csharp
private void ResetDefaultBranch()
```

##### `ResetDeleteBranchOnMerge` <a name="ResetDeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.resetDeleteBranchOnMerge"></a>

```csharp
private void ResetDeleteBranchOnMerge()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.repository.Repository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGitignoreTemplate` <a name="ResetGitignoreTemplate" id="@cdktf/provider-github.repository.Repository.resetGitignoreTemplate"></a>

```csharp
private void ResetGitignoreTemplate()
```

##### `ResetHasDiscussions` <a name="ResetHasDiscussions" id="@cdktf/provider-github.repository.Repository.resetHasDiscussions"></a>

```csharp
private void ResetHasDiscussions()
```

##### `ResetHasDownloads` <a name="ResetHasDownloads" id="@cdktf/provider-github.repository.Repository.resetHasDownloads"></a>

```csharp
private void ResetHasDownloads()
```

##### `ResetHasIssues` <a name="ResetHasIssues" id="@cdktf/provider-github.repository.Repository.resetHasIssues"></a>

```csharp
private void ResetHasIssues()
```

##### `ResetHasProjects` <a name="ResetHasProjects" id="@cdktf/provider-github.repository.Repository.resetHasProjects"></a>

```csharp
private void ResetHasProjects()
```

##### `ResetHasWiki` <a name="ResetHasWiki" id="@cdktf/provider-github.repository.Repository.resetHasWiki"></a>

```csharp
private void ResetHasWiki()
```

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-github.repository.Repository.resetHomepageUrl"></a>

```csharp
private void ResetHomepageUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repository.Repository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreVulnerabilityAlertsDuringRead` <a name="ResetIgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.resetIgnoreVulnerabilityAlertsDuringRead"></a>

```csharp
private void ResetIgnoreVulnerabilityAlertsDuringRead()
```

##### `ResetIsTemplate` <a name="ResetIsTemplate" id="@cdktf/provider-github.repository.Repository.resetIsTemplate"></a>

```csharp
private void ResetIsTemplate()
```

##### `ResetLicenseTemplate` <a name="ResetLicenseTemplate" id="@cdktf/provider-github.repository.Repository.resetLicenseTemplate"></a>

```csharp
private void ResetLicenseTemplate()
```

##### `ResetMergeCommitMessage` <a name="ResetMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetMergeCommitMessage"></a>

```csharp
private void ResetMergeCommitMessage()
```

##### `ResetMergeCommitTitle` <a name="ResetMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetMergeCommitTitle"></a>

```csharp
private void ResetMergeCommitTitle()
```

##### `ResetPages` <a name="ResetPages" id="@cdktf/provider-github.repository.Repository.resetPages"></a>

```csharp
private void ResetPages()
```

##### `ResetPrivate` <a name="ResetPrivate" id="@cdktf/provider-github.repository.Repository.resetPrivate"></a>

```csharp
private void ResetPrivate()
```

##### `ResetSecurityAndAnalysis` <a name="ResetSecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.resetSecurityAndAnalysis"></a>

```csharp
private void ResetSecurityAndAnalysis()
```

##### `ResetSquashMergeCommitMessage` <a name="ResetSquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitMessage"></a>

```csharp
private void ResetSquashMergeCommitMessage()
```

##### `ResetSquashMergeCommitTitle` <a name="ResetSquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.resetSquashMergeCommitTitle"></a>

```csharp
private void ResetSquashMergeCommitTitle()
```

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktf/provider-github.repository.Repository.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-github.repository.Repository.resetTopics"></a>

```csharp
private void ResetTopics()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-github.repository.Repository.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

##### `ResetVulnerabilityAlerts` <a name="ResetVulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.resetVulnerabilityAlerts"></a>

```csharp
private void ResetVulnerabilityAlerts()
```

##### `ResetWebCommitSignoffRequired` <a name="ResetWebCommitSignoffRequired" id="@cdktf/provider-github.repository.Repository.resetWebCommitSignoffRequired"></a>

```csharp
private void ResetWebCommitSignoffRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repository.Repository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Repository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repository.Repository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repository.Repository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Repository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repository.Repository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repository.Repository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Repository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repository.Repository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repository.Repository.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

Repository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repository.Repository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repository.Repository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Repository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repository.Repository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Repository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.Repository.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Repository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitCloneUrl">GitCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.httpCloneUrl">HttpCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pages">Pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.primaryLanguage">PrimaryLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.repoId">RepoId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysis">SecurityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.sshCloneUrl">SshCloneUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.svnUrl">SvnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.template">Template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput">AllowAutoMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput">AllowMergeCommitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput">AllowRebaseMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput">AllowSquashMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput">AllowUpdateBranchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput">ArchiveOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInitInput">AutoInitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput">DeleteBranchOnMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput">GitignoreTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput">HasDiscussionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloadsInput">HasDownloadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssuesInput">HasIssuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjectsInput">HasProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWikiInput">HasWikiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput">IgnoreVulnerabilityAlertsDuringReadInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplateInput">IsTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplateInput">LicenseTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput">MergeCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput">MergeCommitTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.pagesInput">PagesInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.privateInput">PrivateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput">SecurityAndAnalysisInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput">SquashMergeCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput">SquashMergeCommitTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.templateInput">TemplateInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topicsInput">TopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput">VulnerabilityAlertsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.webCommitSignoffRequiredInput">WebCommitSignoffRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowAutoMerge">AllowAutoMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowMergeCommit">AllowMergeCommit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowRebaseMerge">AllowRebaseMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowSquashMerge">AllowSquashMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.allowUpdateBranch">AllowUpdateBranch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.autoInit">AutoInit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge">DeleteBranchOnMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.gitignoreTemplate">GitignoreTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDiscussions">HasDiscussions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasDownloads">HasDownloads</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasIssues">HasIssues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasProjects">HasProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.hasWiki">HasWiki</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead">IgnoreVulnerabilityAlertsDuringRead</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.isTemplate">IsTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.licenseTemplate">LicenseTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitMessage">MergeCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.mergeCommitTitle">MergeCommitTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.private">Private</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage">SquashMergeCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle">SquashMergeCommitTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.topics">Topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts">VulnerabilityAlerts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repository.Repository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repository.Repository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.Repository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repository.Repository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repository.Repository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repository.Repository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repository.Repository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repository.Repository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repository.Repository.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repository.Repository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repository.Repository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repository.Repository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.Repository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repository.Repository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.repository.Repository.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-github.repository.Repository.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `GitCloneUrl`<sup>Required</sup> <a name="GitCloneUrl" id="@cdktf/provider-github.repository.Repository.property.gitCloneUrl"></a>

```csharp
public string GitCloneUrl { get; }
```

- *Type:* string

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-github.repository.Repository.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `HttpCloneUrl`<sup>Required</sup> <a name="HttpCloneUrl" id="@cdktf/provider-github.repository.Repository.property.httpCloneUrl"></a>

```csharp
public string HttpCloneUrl { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.repository.Repository.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Pages`<sup>Required</sup> <a name="Pages" id="@cdktf/provider-github.repository.Repository.property.pages"></a>

```csharp
public RepositoryPagesOutputReference Pages { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference">RepositoryPagesOutputReference</a>

---

##### `PrimaryLanguage`<sup>Required</sup> <a name="PrimaryLanguage" id="@cdktf/provider-github.repository.Repository.property.primaryLanguage"></a>

```csharp
public string PrimaryLanguage { get; }
```

- *Type:* string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktf/provider-github.repository.Repository.property.repoId"></a>

```csharp
public double RepoId { get; }
```

- *Type:* double

---

##### `SecurityAndAnalysis`<sup>Required</sup> <a name="SecurityAndAnalysis" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysis"></a>

```csharp
public RepositorySecurityAndAnalysisOutputReference SecurityAndAnalysis { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference">RepositorySecurityAndAnalysisOutputReference</a>

---

##### `SshCloneUrl`<sup>Required</sup> <a name="SshCloneUrl" id="@cdktf/provider-github.repository.Repository.property.sshCloneUrl"></a>

```csharp
public string SshCloneUrl { get; }
```

- *Type:* string

---

##### `SvnUrl`<sup>Required</sup> <a name="SvnUrl" id="@cdktf/provider-github.repository.Repository.property.svnUrl"></a>

```csharp
public string SvnUrl { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-github.repository.Repository.property.template"></a>

```csharp
public RepositoryTemplateOutputReference Template { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference">RepositoryTemplateOutputReference</a>

---

##### `AllowAutoMergeInput`<sup>Optional</sup> <a name="AllowAutoMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowAutoMergeInput"></a>

```csharp
public object AllowAutoMergeInput { get; }
```

- *Type:* object

---

##### `AllowMergeCommitInput`<sup>Optional</sup> <a name="AllowMergeCommitInput" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommitInput"></a>

```csharp
public object AllowMergeCommitInput { get; }
```

- *Type:* object

---

##### `AllowRebaseMergeInput`<sup>Optional</sup> <a name="AllowRebaseMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMergeInput"></a>

```csharp
public object AllowRebaseMergeInput { get; }
```

- *Type:* object

---

##### `AllowSquashMergeInput`<sup>Optional</sup> <a name="AllowSquashMergeInput" id="@cdktf/provider-github.repository.Repository.property.allowSquashMergeInput"></a>

```csharp
public object AllowSquashMergeInput { get; }
```

- *Type:* object

---

##### `AllowUpdateBranchInput`<sup>Optional</sup> <a name="AllowUpdateBranchInput" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranchInput"></a>

```csharp
public object AllowUpdateBranchInput { get; }
```

- *Type:* object

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-github.repository.Repository.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `ArchiveOnDestroyInput`<sup>Optional</sup> <a name="ArchiveOnDestroyInput" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroyInput"></a>

```csharp
public object ArchiveOnDestroyInput { get; }
```

- *Type:* object

---

##### `AutoInitInput`<sup>Optional</sup> <a name="AutoInitInput" id="@cdktf/provider-github.repository.Repository.property.autoInitInput"></a>

```csharp
public object AutoInitInput { get; }
```

- *Type:* object

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-github.repository.Repository.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `DeleteBranchOnMergeInput`<sup>Optional</sup> <a name="DeleteBranchOnMergeInput" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMergeInput"></a>

```csharp
public object DeleteBranchOnMergeInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.repository.Repository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GitignoreTemplateInput`<sup>Optional</sup> <a name="GitignoreTemplateInput" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplateInput"></a>

```csharp
public string GitignoreTemplateInput { get; }
```

- *Type:* string

---

##### `HasDiscussionsInput`<sup>Optional</sup> <a name="HasDiscussionsInput" id="@cdktf/provider-github.repository.Repository.property.hasDiscussionsInput"></a>

```csharp
public object HasDiscussionsInput { get; }
```

- *Type:* object

---

##### `HasDownloadsInput`<sup>Optional</sup> <a name="HasDownloadsInput" id="@cdktf/provider-github.repository.Repository.property.hasDownloadsInput"></a>

```csharp
public object HasDownloadsInput { get; }
```

- *Type:* object

---

##### `HasIssuesInput`<sup>Optional</sup> <a name="HasIssuesInput" id="@cdktf/provider-github.repository.Repository.property.hasIssuesInput"></a>

```csharp
public object HasIssuesInput { get; }
```

- *Type:* object

---

##### `HasProjectsInput`<sup>Optional</sup> <a name="HasProjectsInput" id="@cdktf/provider-github.repository.Repository.property.hasProjectsInput"></a>

```csharp
public object HasProjectsInput { get; }
```

- *Type:* object

---

##### `HasWikiInput`<sup>Optional</sup> <a name="HasWikiInput" id="@cdktf/provider-github.repository.Repository.property.hasWikiInput"></a>

```csharp
public object HasWikiInput { get; }
```

- *Type:* object

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-github.repository.Repository.property.homepageUrlInput"></a>

```csharp
public string HomepageUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repository.Repository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreVulnerabilityAlertsDuringReadInput`<sup>Optional</sup> <a name="IgnoreVulnerabilityAlertsDuringReadInput" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringReadInput"></a>

```csharp
public object IgnoreVulnerabilityAlertsDuringReadInput { get; }
```

- *Type:* object

---

##### `IsTemplateInput`<sup>Optional</sup> <a name="IsTemplateInput" id="@cdktf/provider-github.repository.Repository.property.isTemplateInput"></a>

```csharp
public object IsTemplateInput { get; }
```

- *Type:* object

---

##### `LicenseTemplateInput`<sup>Optional</sup> <a name="LicenseTemplateInput" id="@cdktf/provider-github.repository.Repository.property.licenseTemplateInput"></a>

```csharp
public string LicenseTemplateInput { get; }
```

- *Type:* string

---

##### `MergeCommitMessageInput`<sup>Optional</sup> <a name="MergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessageInput"></a>

```csharp
public string MergeCommitMessageInput { get; }
```

- *Type:* string

---

##### `MergeCommitTitleInput`<sup>Optional</sup> <a name="MergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitleInput"></a>

```csharp
public string MergeCommitTitleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repository.Repository.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PagesInput`<sup>Optional</sup> <a name="PagesInput" id="@cdktf/provider-github.repository.Repository.property.pagesInput"></a>

```csharp
public RepositoryPages PagesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---

##### `PrivateInput`<sup>Optional</sup> <a name="PrivateInput" id="@cdktf/provider-github.repository.Repository.property.privateInput"></a>

```csharp
public object PrivateInput { get; }
```

- *Type:* object

---

##### `SecurityAndAnalysisInput`<sup>Optional</sup> <a name="SecurityAndAnalysisInput" id="@cdktf/provider-github.repository.Repository.property.securityAndAnalysisInput"></a>

```csharp
public RepositorySecurityAndAnalysis SecurityAndAnalysisInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---

##### `SquashMergeCommitMessageInput`<sup>Optional</sup> <a name="SquashMergeCommitMessageInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessageInput"></a>

```csharp
public string SquashMergeCommitMessageInput { get; }
```

- *Type:* string

---

##### `SquashMergeCommitTitleInput`<sup>Optional</sup> <a name="SquashMergeCommitTitleInput" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitleInput"></a>

```csharp
public string SquashMergeCommitTitleInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-github.repository.Repository.property.templateInput"></a>

```csharp
public RepositoryTemplate TemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-github.repository.Repository.property.topicsInput"></a>

```csharp
public string[] TopicsInput { get; }
```

- *Type:* string[]

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.repository.Repository.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `VulnerabilityAlertsInput`<sup>Optional</sup> <a name="VulnerabilityAlertsInput" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlertsInput"></a>

```csharp
public object VulnerabilityAlertsInput { get; }
```

- *Type:* object

---

##### `WebCommitSignoffRequiredInput`<sup>Optional</sup> <a name="WebCommitSignoffRequiredInput" id="@cdktf/provider-github.repository.Repository.property.webCommitSignoffRequiredInput"></a>

```csharp
public object WebCommitSignoffRequiredInput { get; }
```

- *Type:* object

---

##### `AllowAutoMerge`<sup>Required</sup> <a name="AllowAutoMerge" id="@cdktf/provider-github.repository.Repository.property.allowAutoMerge"></a>

```csharp
public object AllowAutoMerge { get; }
```

- *Type:* object

---

##### `AllowMergeCommit`<sup>Required</sup> <a name="AllowMergeCommit" id="@cdktf/provider-github.repository.Repository.property.allowMergeCommit"></a>

```csharp
public object AllowMergeCommit { get; }
```

- *Type:* object

---

##### `AllowRebaseMerge`<sup>Required</sup> <a name="AllowRebaseMerge" id="@cdktf/provider-github.repository.Repository.property.allowRebaseMerge"></a>

```csharp
public object AllowRebaseMerge { get; }
```

- *Type:* object

---

##### `AllowSquashMerge`<sup>Required</sup> <a name="AllowSquashMerge" id="@cdktf/provider-github.repository.Repository.property.allowSquashMerge"></a>

```csharp
public object AllowSquashMerge { get; }
```

- *Type:* object

---

##### `AllowUpdateBranch`<sup>Required</sup> <a name="AllowUpdateBranch" id="@cdktf/provider-github.repository.Repository.property.allowUpdateBranch"></a>

```csharp
public object AllowUpdateBranch { get; }
```

- *Type:* object

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-github.repository.Repository.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `ArchiveOnDestroy`<sup>Required</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-github.repository.Repository.property.archiveOnDestroy"></a>

```csharp
public object ArchiveOnDestroy { get; }
```

- *Type:* object

---

##### `AutoInit`<sup>Required</sup> <a name="AutoInit" id="@cdktf/provider-github.repository.Repository.property.autoInit"></a>

```csharp
public object AutoInit { get; }
```

- *Type:* object

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-github.repository.Repository.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `DeleteBranchOnMerge`<sup>Required</sup> <a name="DeleteBranchOnMerge" id="@cdktf/provider-github.repository.Repository.property.deleteBranchOnMerge"></a>

```csharp
public object DeleteBranchOnMerge { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.repository.Repository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GitignoreTemplate`<sup>Required</sup> <a name="GitignoreTemplate" id="@cdktf/provider-github.repository.Repository.property.gitignoreTemplate"></a>

```csharp
public string GitignoreTemplate { get; }
```

- *Type:* string

---

##### `HasDiscussions`<sup>Required</sup> <a name="HasDiscussions" id="@cdktf/provider-github.repository.Repository.property.hasDiscussions"></a>

```csharp
public object HasDiscussions { get; }
```

- *Type:* object

---

##### `HasDownloads`<sup>Required</sup> <a name="HasDownloads" id="@cdktf/provider-github.repository.Repository.property.hasDownloads"></a>

```csharp
public object HasDownloads { get; }
```

- *Type:* object

---

##### `HasIssues`<sup>Required</sup> <a name="HasIssues" id="@cdktf/provider-github.repository.Repository.property.hasIssues"></a>

```csharp
public object HasIssues { get; }
```

- *Type:* object

---

##### `HasProjects`<sup>Required</sup> <a name="HasProjects" id="@cdktf/provider-github.repository.Repository.property.hasProjects"></a>

```csharp
public object HasProjects { get; }
```

- *Type:* object

---

##### `HasWiki`<sup>Required</sup> <a name="HasWiki" id="@cdktf/provider-github.repository.Repository.property.hasWiki"></a>

```csharp
public object HasWiki { get; }
```

- *Type:* object

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-github.repository.Repository.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repository.Repository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreVulnerabilityAlertsDuringRead`<sup>Required</sup> <a name="IgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.Repository.property.ignoreVulnerabilityAlertsDuringRead"></a>

```csharp
public object IgnoreVulnerabilityAlertsDuringRead { get; }
```

- *Type:* object

---

##### `IsTemplate`<sup>Required</sup> <a name="IsTemplate" id="@cdktf/provider-github.repository.Repository.property.isTemplate"></a>

```csharp
public object IsTemplate { get; }
```

- *Type:* object

---

##### `LicenseTemplate`<sup>Required</sup> <a name="LicenseTemplate" id="@cdktf/provider-github.repository.Repository.property.licenseTemplate"></a>

```csharp
public string LicenseTemplate { get; }
```

- *Type:* string

---

##### `MergeCommitMessage`<sup>Required</sup> <a name="MergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.mergeCommitMessage"></a>

```csharp
public string MergeCommitMessage { get; }
```

- *Type:* string

---

##### `MergeCommitTitle`<sup>Required</sup> <a name="MergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.mergeCommitTitle"></a>

```csharp
public string MergeCommitTitle { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repository.Repository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Private`<sup>Required</sup> <a name="Private" id="@cdktf/provider-github.repository.Repository.property.private"></a>

```csharp
public object Private { get; }
```

- *Type:* object

---

##### `SquashMergeCommitMessage`<sup>Required</sup> <a name="SquashMergeCommitMessage" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitMessage"></a>

```csharp
public string SquashMergeCommitMessage { get; }
```

- *Type:* string

---

##### `SquashMergeCommitTitle`<sup>Required</sup> <a name="SquashMergeCommitTitle" id="@cdktf/provider-github.repository.Repository.property.squashMergeCommitTitle"></a>

```csharp
public string SquashMergeCommitTitle { get; }
```

- *Type:* string

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-github.repository.Repository.property.topics"></a>

```csharp
public string[] Topics { get; }
```

- *Type:* string[]

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.repository.Repository.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `VulnerabilityAlerts`<sup>Required</sup> <a name="VulnerabilityAlerts" id="@cdktf/provider-github.repository.Repository.property.vulnerabilityAlerts"></a>

```csharp
public object VulnerabilityAlerts { get; }
```

- *Type:* object

---

##### `WebCommitSignoffRequired`<sup>Required</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.repository.Repository.property.webCommitSignoffRequired"></a>

```csharp
public object WebCommitSignoffRequired { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.Repository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repository.Repository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryConfig <a name="RepositoryConfig" id="@cdktf/provider-github.repository.RepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowAutoMerge = null,
    object AllowMergeCommit = null,
    object AllowRebaseMerge = null,
    object AllowSquashMerge = null,
    object AllowUpdateBranch = null,
    object Archived = null,
    object ArchiveOnDestroy = null,
    object AutoInit = null,
    string DefaultBranch = null,
    object DeleteBranchOnMerge = null,
    string Description = null,
    string GitignoreTemplate = null,
    object HasDiscussions = null,
    object HasDownloads = null,
    object HasIssues = null,
    object HasProjects = null,
    object HasWiki = null,
    string HomepageUrl = null,
    string Id = null,
    object IgnoreVulnerabilityAlertsDuringRead = null,
    object IsTemplate = null,
    string LicenseTemplate = null,
    string MergeCommitMessage = null,
    string MergeCommitTitle = null,
    RepositoryPages Pages = null,
    object Private = null,
    RepositorySecurityAndAnalysis SecurityAndAnalysis = null,
    string SquashMergeCommitMessage = null,
    string SquashMergeCommitTitle = null,
    RepositoryTemplate Template = null,
    string[] Topics = null,
    string Visibility = null,
    object VulnerabilityAlerts = null,
    object WebCommitSignoffRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.name">Name</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge">AllowAutoMerge</a></code> | <code>object</code> | Set to 'true' to allow auto-merging pull requests on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit">AllowMergeCommit</a></code> | <code>object</code> | Set to 'false' to disable merge commits on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge">AllowRebaseMerge</a></code> | <code>object</code> | Set to 'false' to disable rebase merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge">AllowSquashMerge</a></code> | <code>object</code> | Set to 'false' to disable squash merges on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch">AllowUpdateBranch</a></code> | <code>object</code> | Set to 'true' to always suggest updating pull request branches. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archived">Archived</a></code> | <code>object</code> | Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>object</code> | Set to 'true' to archive the repository instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.autoInit">AutoInit</a></code> | <code>object</code> | Set to 'true' to produce an initial commit in the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | Can only be set after initial repository creation, and only if the target branch exists. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge">DeleteBranchOnMerge</a></code> | <code>object</code> | Automatically delete head branch after a pull request is merged. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.description">Description</a></code> | <code>string</code> | A description of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate">GitignoreTemplate</a></code> | <code>string</code> | Use the name of the template without the extension. For example, 'Haskell'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions">HasDiscussions</a></code> | <code>object</code> | Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads">HasDownloads</a></code> | <code>object</code> | Set to 'true' to enable the (deprecated) downloads features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues">HasIssues</a></code> | <code>object</code> | Set to 'true' to enable the GitHub Issues features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects">HasProjects</a></code> | <code>object</code> | Set to 'true' to enable the GitHub Projects features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki">HasWiki</a></code> | <code>object</code> | Set to 'true' to enable the GitHub Wiki features on the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl">HomepageUrl</a></code> | <code>string</code> | URL of a page describing the project. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#id Repository#id}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead">IgnoreVulnerabilityAlertsDuringRead</a></code> | <code>object</code> | Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate">IsTemplate</a></code> | <code>object</code> | Set to 'true' to tell GitHub that this is a template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate">LicenseTemplate</a></code> | <code>string</code> | Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage">MergeCommitMessage</a></code> | <code>string</code> | Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle">MergeCommitTitle</a></code> | <code>string</code> | Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.pages">Pages</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | pages block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.private">Private</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#private Repository#private}. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis">SecurityAndAnalysis</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | security_and_analysis block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage">SquashMergeCommitMessage</a></code> | <code>string</code> | Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle">SquashMergeCommitTitle</a></code> | <code>string</code> | Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.template">Template</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.topics">Topics</a></code> | <code>string[]</code> | The list of topics of the repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.visibility">Visibility</a></code> | <code>string</code> | Can be 'public' or 'private'. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts">VulnerabilityAlerts</a></code> | <code>object</code> | Set to 'true' to enable security alerts for vulnerable dependencies. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryConfig.property.webCommitSignoffRequired">WebCommitSignoffRequired</a></code> | <code>object</code> | Require contributors to sign off on web-based commits. Defaults to 'false'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repository.RepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repository.RepositoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repository.RepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repository.RepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repository.RepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repository.RepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repository.RepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repository.RepositoryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#name Repository#name}

---

##### `AllowAutoMerge`<sup>Optional</sup> <a name="AllowAutoMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowAutoMerge"></a>

```csharp
public object AllowAutoMerge { get; set; }
```

- *Type:* object

Set to 'true' to allow auto-merging pull requests on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#allow_auto_merge Repository#allow_auto_merge}

---

##### `AllowMergeCommit`<sup>Optional</sup> <a name="AllowMergeCommit" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowMergeCommit"></a>

```csharp
public object AllowMergeCommit { get; set; }
```

- *Type:* object

Set to 'false' to disable merge commits on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#allow_merge_commit Repository#allow_merge_commit}

---

##### `AllowRebaseMerge`<sup>Optional</sup> <a name="AllowRebaseMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowRebaseMerge"></a>

```csharp
public object AllowRebaseMerge { get; set; }
```

- *Type:* object

Set to 'false' to disable rebase merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#allow_rebase_merge Repository#allow_rebase_merge}

---

##### `AllowSquashMerge`<sup>Optional</sup> <a name="AllowSquashMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowSquashMerge"></a>

```csharp
public object AllowSquashMerge { get; set; }
```

- *Type:* object

Set to 'false' to disable squash merges on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#allow_squash_merge Repository#allow_squash_merge}

---

##### `AllowUpdateBranch`<sup>Optional</sup> <a name="AllowUpdateBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.allowUpdateBranch"></a>

```csharp
public object AllowUpdateBranch { get; set; }
```

- *Type:* object

Set to 'true' to always suggest updating pull request branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#allow_update_branch Repository#allow_update_branch}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-github.repository.RepositoryConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Specifies if the repository should be archived. Defaults to 'false'. NOTE Currently, the API does not support unarchiving.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#archived Repository#archived}

---

##### `ArchiveOnDestroy`<sup>Optional</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-github.repository.RepositoryConfig.property.archiveOnDestroy"></a>

```csharp
public object ArchiveOnDestroy { get; set; }
```

- *Type:* object

Set to 'true' to archive the repository instead of deleting on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#archive_on_destroy Repository#archive_on_destroy}

---

##### `AutoInit`<sup>Optional</sup> <a name="AutoInit" id="@cdktf/provider-github.repository.RepositoryConfig.property.autoInit"></a>

```csharp
public object AutoInit { get; set; }
```

- *Type:* object

Set to 'true' to produce an initial commit in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#auto_init Repository#auto_init}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-github.repository.RepositoryConfig.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

Can only be set after initial repository creation, and only if the target branch exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#default_branch Repository#default_branch}

---

##### `DeleteBranchOnMerge`<sup>Optional</sup> <a name="DeleteBranchOnMerge" id="@cdktf/provider-github.repository.RepositoryConfig.property.deleteBranchOnMerge"></a>

```csharp
public object DeleteBranchOnMerge { get; set; }
```

- *Type:* object

Automatically delete head branch after a pull request is merged. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#delete_branch_on_merge Repository#delete_branch_on_merge}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.repository.RepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#description Repository#description}

---

##### `GitignoreTemplate`<sup>Optional</sup> <a name="GitignoreTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.gitignoreTemplate"></a>

```csharp
public string GitignoreTemplate { get; set; }
```

- *Type:* string

Use the name of the template without the extension. For example, 'Haskell'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#gitignore_template Repository#gitignore_template}

---

##### `HasDiscussions`<sup>Optional</sup> <a name="HasDiscussions" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDiscussions"></a>

```csharp
public object HasDiscussions { get; set; }
```

- *Type:* object

Set to 'true' to enable GitHub Discussions on the repository. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#has_discussions Repository#has_discussions}

---

##### `HasDownloads`<sup>Optional</sup> <a name="HasDownloads" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasDownloads"></a>

```csharp
public object HasDownloads { get; set; }
```

- *Type:* object

Set to 'true' to enable the (deprecated) downloads features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#has_downloads Repository#has_downloads}

---

##### `HasIssues`<sup>Optional</sup> <a name="HasIssues" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasIssues"></a>

```csharp
public object HasIssues { get; set; }
```

- *Type:* object

Set to 'true' to enable the GitHub Issues features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#has_issues Repository#has_issues}

---

##### `HasProjects`<sup>Optional</sup> <a name="HasProjects" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasProjects"></a>

```csharp
public object HasProjects { get; set; }
```

- *Type:* object

Set to 'true' to enable the GitHub Projects features on the repository.

Per the GitHub documentation when in an organization that has disabled repository projects it will default to 'false' and will otherwise default to 'true'. If you specify 'true' when it has been disabled it will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#has_projects Repository#has_projects}

---

##### `HasWiki`<sup>Optional</sup> <a name="HasWiki" id="@cdktf/provider-github.repository.RepositoryConfig.property.hasWiki"></a>

```csharp
public object HasWiki { get; set; }
```

- *Type:* object

Set to 'true' to enable the GitHub Wiki features on the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#has_wiki Repository#has_wiki}

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-github.repository.RepositoryConfig.property.homepageUrl"></a>

```csharp
public string HomepageUrl { get; set; }
```

- *Type:* string

URL of a page describing the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#homepage_url Repository#homepage_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repository.RepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#id Repository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreVulnerabilityAlertsDuringRead`<sup>Optional</sup> <a name="IgnoreVulnerabilityAlertsDuringRead" id="@cdktf/provider-github.repository.RepositoryConfig.property.ignoreVulnerabilityAlertsDuringRead"></a>

```csharp
public object IgnoreVulnerabilityAlertsDuringRead { get; set; }
```

- *Type:* object

Set to true to not call the vulnerability alerts endpoint so the resource can also be used without admin permissions during read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#ignore_vulnerability_alerts_during_read Repository#ignore_vulnerability_alerts_during_read}

---

##### `IsTemplate`<sup>Optional</sup> <a name="IsTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.isTemplate"></a>

```csharp
public object IsTemplate { get; set; }
```

- *Type:* object

Set to 'true' to tell GitHub that this is a template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#is_template Repository#is_template}

---

##### `LicenseTemplate`<sup>Optional</sup> <a name="LicenseTemplate" id="@cdktf/provider-github.repository.RepositoryConfig.property.licenseTemplate"></a>

```csharp
public string LicenseTemplate { get; set; }
```

- *Type:* string

Use the name of the template without the extension. For example, 'mit' or 'mpl-2.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#license_template Repository#license_template}

---

##### `MergeCommitMessage`<sup>Optional</sup> <a name="MergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitMessage"></a>

```csharp
public string MergeCommitMessage { get; set; }
```

- *Type:* string

Can be 'PR_BODY', 'PR_TITLE', or 'BLANK' for a default merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#merge_commit_message Repository#merge_commit_message}

---

##### `MergeCommitTitle`<sup>Optional</sup> <a name="MergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.mergeCommitTitle"></a>

```csharp
public string MergeCommitTitle { get; set; }
```

- *Type:* string

Can be 'PR_TITLE' or 'MERGE_MESSAGE' for a default merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#merge_commit_title Repository#merge_commit_title}

---

##### `Pages`<sup>Optional</sup> <a name="Pages" id="@cdktf/provider-github.repository.RepositoryConfig.property.pages"></a>

```csharp
public RepositoryPages Pages { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#pages Repository#pages}

---

##### `Private`<sup>Optional</sup> <a name="Private" id="@cdktf/provider-github.repository.RepositoryConfig.property.private"></a>

```csharp
public object Private { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#private Repository#private}.

---

##### `SecurityAndAnalysis`<sup>Optional</sup> <a name="SecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositoryConfig.property.securityAndAnalysis"></a>

```csharp
public RepositorySecurityAndAnalysis SecurityAndAnalysis { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

security_and_analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#security_and_analysis Repository#security_and_analysis}

---

##### `SquashMergeCommitMessage`<sup>Optional</sup> <a name="SquashMergeCommitMessage" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitMessage"></a>

```csharp
public string SquashMergeCommitMessage { get; set; }
```

- *Type:* string

Can be 'PR_BODY', 'COMMIT_MESSAGES', or 'BLANK' for a default squash merge commit message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#squash_merge_commit_message Repository#squash_merge_commit_message}

---

##### `SquashMergeCommitTitle`<sup>Optional</sup> <a name="SquashMergeCommitTitle" id="@cdktf/provider-github.repository.RepositoryConfig.property.squashMergeCommitTitle"></a>

```csharp
public string SquashMergeCommitTitle { get; set; }
```

- *Type:* string

Can be 'PR_TITLE' or 'COMMIT_OR_PR_TITLE' for a default squash merge commit title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#squash_merge_commit_title Repository#squash_merge_commit_title}

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktf/provider-github.repository.RepositoryConfig.property.template"></a>

```csharp
public RepositoryTemplate Template { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#template Repository#template}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-github.repository.RepositoryConfig.property.topics"></a>

```csharp
public string[] Topics { get; set; }
```

- *Type:* string[]

The list of topics of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#topics Repository#topics}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-github.repository.RepositoryConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Can be 'public' or 'private'.

If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, visibility can also be 'internal'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#visibility Repository#visibility}

---

##### `VulnerabilityAlerts`<sup>Optional</sup> <a name="VulnerabilityAlerts" id="@cdktf/provider-github.repository.RepositoryConfig.property.vulnerabilityAlerts"></a>

```csharp
public object VulnerabilityAlerts { get; set; }
```

- *Type:* object

Set to 'true' to enable security alerts for vulnerable dependencies.

Enabling requires alerts to be enabled on the owner level. (Note for importing: GitHub enables the alerts on public repos but disables them on private repos by default). Note that vulnerability alerts have not been successfully tested on any GitHub Enterprise instance and may be unavailable in those settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#vulnerability_alerts Repository#vulnerability_alerts}

---

##### `WebCommitSignoffRequired`<sup>Optional</sup> <a name="WebCommitSignoffRequired" id="@cdktf/provider-github.repository.RepositoryConfig.property.webCommitSignoffRequired"></a>

```csharp
public object WebCommitSignoffRequired { get; set; }
```

- *Type:* object

Require contributors to sign off on web-based commits. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#web_commit_signoff_required Repository#web_commit_signoff_required}

---

### RepositoryPages <a name="RepositoryPages" id="@cdktf/provider-github.repository.RepositoryPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryPages {
    string BuildType = null,
    string Cname = null,
    RepositoryPagesSource Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.buildType">BuildType</a></code> | <code>string</code> | The type the page should be sourced. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.cname">Cname</a></code> | <code>string</code> | The custom domain for the repository. This can only be set after the repository has been created. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPages.property.source">Source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | source block. |

---

##### `BuildType`<sup>Optional</sup> <a name="BuildType" id="@cdktf/provider-github.repository.RepositoryPages.property.buildType"></a>

```csharp
public string BuildType { get; set; }
```

- *Type:* string

The type the page should be sourced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#build_type Repository#build_type}

---

##### `Cname`<sup>Optional</sup> <a name="Cname" id="@cdktf/provider-github.repository.RepositoryPages.property.cname"></a>

```csharp
public string Cname { get; set; }
```

- *Type:* string

The custom domain for the repository. This can only be set after the repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#cname Repository#cname}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-github.repository.RepositoryPages.property.source"></a>

```csharp
public RepositoryPagesSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#source Repository#source}

---

### RepositoryPagesSource <a name="RepositoryPagesSource" id="@cdktf/provider-github.repository.RepositoryPagesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryPagesSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryPagesSource {
    string Branch,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.branch">Branch</a></code> | <code>string</code> | The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages'). |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource.property.path">Path</a></code> | <code>string</code> | The repository directory from which the site publishes (Default: '/'). |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The repository branch used to publish the site's source files. (i.e. 'main' or 'gh-pages').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#branch Repository#branch}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-github.repository.RepositoryPagesSource.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The repository directory from which the site publishes (Default: '/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#path Repository#path}

---

### RepositorySecurityAndAnalysis <a name="RepositorySecurityAndAnalysis" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysis {
    RepositorySecurityAndAnalysisAdvancedSecurity AdvancedSecurity = null,
    RepositorySecurityAndAnalysisSecretScanning SecretScanning = null,
    RepositorySecurityAndAnalysisSecretScanningPushProtection SecretScanningPushProtection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity">AdvancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | advanced_security block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning">SecretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | secret_scanning block. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection">SecretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | secret_scanning_push_protection block. |

---

##### `AdvancedSecurity`<sup>Optional</sup> <a name="AdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.advancedSecurity"></a>

```csharp
public RepositorySecurityAndAnalysisAdvancedSecurity AdvancedSecurity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

advanced_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#advanced_security Repository#advanced_security}

---

##### `SecretScanning`<sup>Optional</sup> <a name="SecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanning"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanning SecretScanning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

secret_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#secret_scanning Repository#secret_scanning}

---

##### `SecretScanningPushProtection`<sup>Optional</sup> <a name="SecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysis.property.secretScanningPushProtection"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanningPushProtection SecretScanningPushProtection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

secret_scanning_push_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#secret_scanning_push_protection Repository#secret_scanning_push_protection}

---

### RepositorySecurityAndAnalysisAdvancedSecurity <a name="RepositorySecurityAndAnalysisAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisAdvancedSecurity {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status">Status</a></code> | <code>string</code> | Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Set to 'enabled' to enable advanced security features on the repository. Can be 'enabled' or 'disabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanning <a name="RepositorySecurityAndAnalysisSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisSecretScanning {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status">Status</a></code> | <code>string</code> | Set to 'enabled' to enable secret scanning on the repository. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Set to 'enabled' to enable secret scanning on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#status Repository#status}

---

### RepositorySecurityAndAnalysisSecretScanningPushProtection <a name="RepositorySecurityAndAnalysisSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisSecretScanningPushProtection {
    string Status
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status">Status</a></code> | <code>string</code> | Set to 'enabled' to enable secret scanning push protection on the repository. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Set to 'enabled' to enable secret scanning push protection on the repository.

Can be 'enabled' or 'disabled'. If set to 'enabled', the repository's visibility must be 'public' or 'security_and_analysis[0].advanced_security[0].status' must also be set to 'enabled'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#status Repository#status}

---

### RepositoryTemplate <a name="RepositoryTemplate" id="@cdktf/provider-github.repository.RepositoryTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repository.RepositoryTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryTemplate {
    string Owner,
    string Repository,
    object IncludeAllBranches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.owner">Owner</a></code> | <code>string</code> | The GitHub organization or user the template repository is owned by. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.repository">Repository</a></code> | <code>string</code> | The name of the template repository. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches">IncludeAllBranches</a></code> | <code>object</code> | Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template). |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repository.RepositoryTemplate.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

The GitHub organization or user the template repository is owned by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#owner Repository#owner}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repository.RepositoryTemplate.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The name of the template repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#repository Repository#repository}

---

##### `IncludeAllBranches`<sup>Optional</sup> <a name="IncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplate.property.includeAllBranches"></a>

```csharp
public object IncludeAllBranches { get; set; }
```

- *Type:* object

Whether the new repository should include all the branches from the template repository (defaults to 'false', which includes only the default branch from the template).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.4.0/docs/resources/repository#include_all_branches Repository#include_all_branches}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryPagesOutputReference <a name="RepositoryPagesOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryPagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType">ResetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname">ResetCname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource"></a>

```csharp
private void PutSource(RepositoryPagesSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `ResetBuildType` <a name="ResetBuildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetBuildType"></a>

```csharp
private void ResetBuildType()
```

##### `ResetCname` <a name="ResetCname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetCname"></a>

```csharp
private void ResetCname()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404">Custom404</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl">HtmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput">BuildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput">CnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType">BuildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom404`<sup>Required</sup> <a name="Custom404" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.custom404"></a>

```csharp
public IResolvable Custom404 { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HtmlUrl`<sup>Required</sup> <a name="HtmlUrl" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.htmlUrl"></a>

```csharp
public string HtmlUrl { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.source"></a>

```csharp
public RepositoryPagesSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference">RepositoryPagesSourceOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `BuildTypeInput`<sup>Optional</sup> <a name="BuildTypeInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildTypeInput"></a>

```csharp
public string BuildTypeInput { get; }
```

- *Type:* string

---

##### `CnameInput`<sup>Optional</sup> <a name="CnameInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cnameInput"></a>

```csharp
public string CnameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.sourceInput"></a>

```csharp
public RepositoryPagesSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---

##### `BuildType`<sup>Required</sup> <a name="BuildType" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.buildType"></a>

```csharp
public string BuildType { get; }
```

- *Type:* string

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryPagesOutputReference.property.internalValue"></a>

```csharp
public RepositoryPages InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPages">RepositoryPages</a>

---


### RepositoryPagesSourceOutputReference <a name="RepositoryPagesSourceOutputReference" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryPagesSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryPagesSourceOutputReference.property.internalValue"></a>

```csharp
public RepositoryPagesSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryPagesSource">RepositoryPagesSource</a>

---


### RepositorySecurityAndAnalysisAdvancedSecurityOutputReference <a name="RepositorySecurityAndAnalysisAdvancedSecurityOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.property.internalValue"></a>

```csharp
public RepositorySecurityAndAnalysisAdvancedSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---


### RepositorySecurityAndAnalysisOutputReference <a name="RepositorySecurityAndAnalysisOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity">PutAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning">PutSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection">PutSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity">ResetAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning">ResetSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection">ResetSecretScanningPushProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedSecurity` <a name="PutAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity"></a>

```csharp
private void PutAdvancedSecurity(RepositorySecurityAndAnalysisAdvancedSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putAdvancedSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `PutSecretScanning` <a name="PutSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning"></a>

```csharp
private void PutSecretScanning(RepositorySecurityAndAnalysisSecretScanning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `PutSecretScanningPushProtection` <a name="PutSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection"></a>

```csharp
private void PutSecretScanningPushProtection(RepositorySecurityAndAnalysisSecretScanningPushProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.putSecretScanningPushProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `ResetAdvancedSecurity` <a name="ResetAdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetAdvancedSecurity"></a>

```csharp
private void ResetAdvancedSecurity()
```

##### `ResetSecretScanning` <a name="ResetSecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanning"></a>

```csharp
private void ResetSecretScanning()
```

##### `ResetSecretScanningPushProtection` <a name="ResetSecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.resetSecretScanningPushProtection"></a>

```csharp
private void ResetSecretScanningPushProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity">AdvancedSecurity</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning">SecretScanning</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection">SecretScanningPushProtection</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput">AdvancedSecurityInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput">SecretScanningInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput">SecretScanningPushProtectionInput</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedSecurity`<sup>Required</sup> <a name="AdvancedSecurity" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurity"></a>

```csharp
public RepositorySecurityAndAnalysisAdvancedSecurityOutputReference AdvancedSecurity { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference">RepositorySecurityAndAnalysisAdvancedSecurityOutputReference</a>

---

##### `SecretScanning`<sup>Required</sup> <a name="SecretScanning" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanning"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanningOutputReference SecretScanning { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference">RepositorySecurityAndAnalysisSecretScanningOutputReference</a>

---

##### `SecretScanningPushProtection`<sup>Required</sup> <a name="SecretScanningPushProtection" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtection"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference SecretScanningPushProtection { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference">RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference</a>

---

##### `AdvancedSecurityInput`<sup>Optional</sup> <a name="AdvancedSecurityInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.advancedSecurityInput"></a>

```csharp
public RepositorySecurityAndAnalysisAdvancedSecurity AdvancedSecurityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisAdvancedSecurity">RepositorySecurityAndAnalysisAdvancedSecurity</a>

---

##### `SecretScanningInput`<sup>Optional</sup> <a name="SecretScanningInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningInput"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanning SecretScanningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---

##### `SecretScanningPushProtectionInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.secretScanningPushProtectionInput"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanningPushProtection SecretScanningPushProtectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisOutputReference.property.internalValue"></a>

```csharp
public RepositorySecurityAndAnalysis InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysis">RepositorySecurityAndAnalysis</a>

---


### RepositorySecurityAndAnalysisSecretScanningOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisSecretScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningOutputReference.property.internalValue"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanning">RepositorySecurityAndAnalysisSecretScanning</a>

---


### RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference <a name="RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.property.internalValue"></a>

```csharp
public RepositorySecurityAndAnalysisSecretScanningPushProtection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositorySecurityAndAnalysisSecretScanningPushProtection">RepositorySecurityAndAnalysisSecretScanningPushProtection</a>

---


### RepositoryTemplateOutputReference <a name="RepositoryTemplateOutputReference" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches">ResetIncludeAllBranches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeAllBranches` <a name="ResetIncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.resetIncludeAllBranches"></a>

```csharp
private void ResetIncludeAllBranches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput">IncludeAllBranchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches">IncludeAllBranches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeAllBranchesInput`<sup>Optional</sup> <a name="IncludeAllBranchesInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranchesInput"></a>

```csharp
public object IncludeAllBranchesInput { get; }
```

- *Type:* object

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `IncludeAllBranches`<sup>Required</sup> <a name="IncludeAllBranches" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.includeAllBranches"></a>

```csharp
public object IncludeAllBranches { get; }
```

- *Type:* object

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repository.RepositoryTemplateOutputReference.property.internalValue"></a>

```csharp
public RepositoryTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repository.RepositoryTemplate">RepositoryTemplate</a>

---



