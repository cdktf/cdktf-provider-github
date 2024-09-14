# `dataGithubOrganizationTeams` Submodule <a name="`dataGithubOrganizationTeams` Submodule" id="@cdktf/provider-github.dataGithubOrganizationTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationTeams <a name="DataGithubOrganizationTeams" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams github_organization_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

new dataGithubOrganizationTeams.DataGithubOrganizationTeams(scope: Construct, id: string, config?: DataGithubOrganizationTeamsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig">DataGithubOrganizationTeamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig">DataGithubOrganizationTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetResultsPerPage">resetResultsPerPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetRootTeamsOnly">resetRootTeamsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetSummaryOnly">resetSummaryOnly</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResultsPerPage` <a name="resetResultsPerPage" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetResultsPerPage"></a>

```typescript
public resetResultsPerPage(): void
```

##### `resetRootTeamsOnly` <a name="resetRootTeamsOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetRootTeamsOnly"></a>

```typescript
public resetRootTeamsOnly(): void
```

##### `resetSummaryOnly` <a name="resetSummaryOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.resetSummaryOnly"></a>

```typescript
public resetSummaryOnly(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isConstruct"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

dataGithubOrganizationTeams.DataGithubOrganizationTeams.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformElement"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformDataSource"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubOrganizationTeams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationTeams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.teams">teams</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList">DataGithubOrganizationTeamsTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.resultsPerPageInput">resultsPerPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.rootTeamsOnlyInput">rootTeamsOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.summaryOnlyInput">summaryOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.resultsPerPage">resultsPerPage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.rootTeamsOnly">rootTeamsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.summaryOnly">summaryOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.teams"></a>

```typescript
public readonly teams: DataGithubOrganizationTeamsTeamsList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList">DataGithubOrganizationTeamsTeamsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resultsPerPageInput`<sup>Optional</sup> <a name="resultsPerPageInput" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.resultsPerPageInput"></a>

```typescript
public readonly resultsPerPageInput: number;
```

- *Type:* number

---

##### `rootTeamsOnlyInput`<sup>Optional</sup> <a name="rootTeamsOnlyInput" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.rootTeamsOnlyInput"></a>

```typescript
public readonly rootTeamsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `summaryOnlyInput`<sup>Optional</sup> <a name="summaryOnlyInput" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.summaryOnlyInput"></a>

```typescript
public readonly summaryOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resultsPerPage`<sup>Required</sup> <a name="resultsPerPage" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.resultsPerPage"></a>

```typescript
public readonly resultsPerPage: number;
```

- *Type:* number

---

##### `rootTeamsOnly`<sup>Required</sup> <a name="rootTeamsOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.rootTeamsOnly"></a>

```typescript
public readonly rootTeamsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `summaryOnly`<sup>Required</sup> <a name="summaryOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.summaryOnly"></a>

```typescript
public readonly summaryOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeams.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationTeamsConfig <a name="DataGithubOrganizationTeamsConfig" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.Initializer"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

const dataGithubOrganizationTeamsConfig: dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#id DataGithubOrganizationTeams#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.resultsPerPage">resultsPerPage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#results_per_page DataGithubOrganizationTeams#results_per_page}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.rootTeamsOnly">rootTeamsOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#root_teams_only DataGithubOrganizationTeams#root_teams_only}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.summaryOnly">summaryOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#summary_only DataGithubOrganizationTeams#summary_only}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#id DataGithubOrganizationTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resultsPerPage`<sup>Optional</sup> <a name="resultsPerPage" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.resultsPerPage"></a>

```typescript
public readonly resultsPerPage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#results_per_page DataGithubOrganizationTeams#results_per_page}.

---

##### `rootTeamsOnly`<sup>Optional</sup> <a name="rootTeamsOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.rootTeamsOnly"></a>

```typescript
public readonly rootTeamsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#root_teams_only DataGithubOrganizationTeams#root_teams_only}.

---

##### `summaryOnly`<sup>Optional</sup> <a name="summaryOnly" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsConfig.property.summaryOnly"></a>

```typescript
public readonly summaryOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/organization_teams#summary_only DataGithubOrganizationTeams#summary_only}.

---

### DataGithubOrganizationTeamsTeams <a name="DataGithubOrganizationTeamsTeams" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeams.Initializer"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

const dataGithubOrganizationTeamsTeams: dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeams = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationTeamsTeamsList <a name="DataGithubOrganizationTeamsTeamsList" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

new dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.get"></a>

```typescript
public get(index: number): DataGithubOrganizationTeamsTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubOrganizationTeamsTeamsOutputReference <a name="DataGithubOrganizationTeamsTeamsOutputReference" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer"></a>

```typescript
import { dataGithubOrganizationTeams } from '@cdktf/provider-github'

new dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.parent">parent</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.privacy">privacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeams">DataGithubOrganizationTeamsTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.parent"></a>

```typescript
public readonly parent: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubOrganizationTeamsTeams;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationTeams.DataGithubOrganizationTeamsTeams">DataGithubOrganizationTeamsTeams</a>

---



