# `github_actions_repository_oidc_subject_claim_customization_template`

Refer to the Terraform Registory for docs: [`github_actions_repository_oidc_subject_claim_customization_template`](https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template).

# `actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule <a name="`actionsRepositoryOidcSubjectClaimCustomizationTemplate` Submodule" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplate <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplate" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template github_actions_repository_oidc_subject_claim_customization_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer"></a>

```typescript
import { actionsRepositoryOidcSubjectClaimCustomizationTemplate } from '@cdktf/provider-github'

new actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate(scope: Construct, id: string, config: ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig">ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys">resetIncludeClaimKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeClaimKeys` <a name="resetIncludeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.resetIncludeClaimKeys"></a>

```typescript
public resetIncludeClaimKeys(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct"></a>

```typescript
import { actionsRepositoryOidcSubjectClaimCustomizationTemplate } from '@cdktf/provider-github'

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement"></a>

```typescript
import { actionsRepositoryOidcSubjectClaimCustomizationTemplate } from '@cdktf/provider-github'

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource"></a>

```typescript
import { actionsRepositoryOidcSubjectClaimCustomizationTemplate } from '@cdktf/provider-github'

actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput">includeClaimKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput">useDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys">includeClaimKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeClaimKeysInput`<sup>Optional</sup> <a name="includeClaimKeysInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeysInput"></a>

```typescript
public readonly includeClaimKeysInput: string[];
```

- *Type:* string[]

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `useDefaultInput`<sup>Optional</sup> <a name="useDefaultInput" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefaultInput"></a>

```typescript
public readonly useDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeClaimKeys`<sup>Required</sup> <a name="includeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.includeClaimKeys"></a>

```typescript
public readonly includeClaimKeys: string[];
```

- *Type:* string[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig <a name="ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.Initializer"></a>

```typescript
import { actionsRepositoryOidcSubjectClaimCustomizationTemplate } from '@cdktf/provider-github'

const actionsRepositoryOidcSubjectClaimCustomizationTemplateConfig: actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository">repository</a></code> | <code>string</code> | The name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault">useDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys">includeClaimKeys</a></code> | <code>string[]</code> | A list of OpenID Connect claims. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#repository ActionsRepositoryOidcSubjectClaimCustomizationTemplate#repository}

---

##### `useDefault`<sup>Required</sup> <a name="useDefault" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.useDefault"></a>

```typescript
public readonly useDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use the default template or not. If 'true', 'include_claim_keys' must not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#use_default ActionsRepositoryOidcSubjectClaimCustomizationTemplate#use_default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#id ActionsRepositoryOidcSubjectClaimCustomizationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeClaimKeys`<sup>Optional</sup> <a name="includeClaimKeys" id="@cdktf/provider-github.actionsRepositoryOidcSubjectClaimCustomizationTemplate.ActionsRepositoryOidcSubjectClaimCustomizationTemplateConfig.property.includeClaimKeys"></a>

```typescript
public readonly includeClaimKeys: string[];
```

- *Type:* string[]

A list of OpenID Connect claims.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/resources/actions_repository_oidc_subject_claim_customization_template#include_claim_keys ActionsRepositoryOidcSubjectClaimCustomizationTemplate#include_claim_keys}

---



